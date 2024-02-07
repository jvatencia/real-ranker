import { useState, useEffect } from "react";
import useCollegeStore from "../../store/college/college.store";
import { Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme) => ({
        sliderLabel: {
            fontSize: '14px'
        },
        remainingPointsLabel: {
            fontSize: '16px',
            fontWeight: 'bold'
        },
    })
);

export default function FilterSlider() {
    const classes = useStyles();
    const userScores = useCollegeStore((state) => state.userScore);
    const updateUserScores = useCollegeStore((state) => state.updateUserScores);

    const [allocationPoints, setAllocationPoints] = useState(0);
    const [scores, setScores] = useState<any>(userScores);

    const updateSliderValue = (event: any, category: 'success' | 'value' | 'cost' | 'outcomes' | 'diversity') => {
        const oldVal = scores[category];
        if (allocationPoints === 0 && event.target.value > oldVal) {
            return;
        }

        setScores((oldValue: any) => {
            return { ...oldValue, [category]: event.target.value };
        });

        updateUserScores({
            [category]: event.target.value
        });
    }

    useEffect(() => {
        const sumValues = Object.keys(scores).reduce((sum, key) => sum + parseFloat(scores[key] || 0), 0)
        const pts = sumValues >= 100 ? 0 : 100 - sumValues;
        setAllocationPoints(pts);
    }, [scores]);

    return (
        <div>
            <p className={classes.remainingPointsLabel}>Points Left: {allocationPoints}</p>
            <div>
                <div className={classes.sliderLabel}>Success</div>
                <Slider
                    key="successSliderControl"
                    aria-label="Success"
                    value={(scores.success)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'success')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>Value</div>
                <Slider
                    key="valueSliderControl"
                    aria-label="Value"
                    value={(scores.value)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'value')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>Cost</div>
                <Slider
                    key="costSliderControl"
                    aria-label="Cost"
                    value={(scores.cost)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'cost')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>Outcomes</div>
                <Slider
                    key="outcomesSliderControl"
                    aria-label="Outcomes"
                    value={(scores.outcomes)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'outcomes')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>Diversity</div>
                <Slider
                    key="diversitySliderControl"
                    aria-label="Diversity"
                    value={(scores.diversity)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'diversity')}
                    valueLabelDisplay="auto"
                />
            </div>
        </div>
    );
}