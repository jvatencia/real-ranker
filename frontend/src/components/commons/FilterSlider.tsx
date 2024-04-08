import { useState, useEffect } from "react";
import useCollegeStore from "../../store/college/college.store";
import { Badge, Slider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme) => ({
        sliderLabel: {
            fontSize: '14px'
        },
        sliderLabelText: {
            paddingRight: '12px'
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


    const updateAllocationPoints = (scoresTemp: any) => {
        const sumValues = Object.keys(scoresTemp).reduce((sum, key) => sum + parseFloat(scoresTemp[key] || 0), 0)
        const pts = sumValues >= 100 ? 0 : 100 - sumValues;
        setAllocationPoints(pts);

        return pts;
    }


    const updateSliderValue = (event: any, value: number, category: 'success' | 'value' | 'cost' | 'outcomes' | 'diversity') => {
        if (checkConditions(value, category)) {
            return;
        }

        setScores((oldValue: any) => {
            return { ...oldValue, [category]: value };
        });

        updateUserScores({
            [category]: value
        });
    }

    const checkConditions = (value: number, category: string) => {
        const oldVal = scores[category];
        const newVal = value;
        const totalPointsUsed = Object.keys({ ...scores, [category]: value }).reduce((sum, key) => sum + parseFloat(scores[key] || 0), 0);
        const totalPointsLeft = (100 - totalPointsUsed);

        // sliders value increase
        if (newVal > oldVal) {
            const increaseRange = newVal - oldVal;
            return !(increaseRange <= totalPointsLeft);
        }

        return false;
    }


    useEffect(() => {
        updateAllocationPoints(scores);
    }, [scores]);

    return (
        <div>
            <p className={classes.remainingPointsLabel}>Points Left: {allocationPoints}</p>
            <div>
                <div className={classes.sliderLabel}>
                    <span className={classes.sliderLabelText}>Success</span>
                </div>
                <Slider
                    key="successSliderControl"
                    color="secondary"
                    aria-label="Success"
                    value={(scores.success)}
                    step={5}
                    onChange={(e: any, value: any, thumb: any) => updateSliderValue(e, value, 'success')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>
                    <span className={classes.sliderLabelText}>Value</span>
                </div>
                <Slider
                    key="valueSliderControl"
                    color="secondary"
                    aria-label="Value"
                    value={(scores.value)}
                    step={5}
                    onChange={(e: any, value: any, thumb: any) => updateSliderValue(e, value, 'value')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>
                    <span className={classes.sliderLabelText}>Cost</span>
                </div>
                <Slider
                    key="costSliderControl"
                    color="secondary"
                    aria-label="Cost"
                    value={(scores.cost)}
                    step={5}
                    onChange={(e: any, value: any, thumb: any) => updateSliderValue(e, value, 'cost')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>
                    <span className={classes.sliderLabelText}>Outcomes</span>
                </div>
                <Slider
                    key="outcomesSliderControl"
                    color="secondary"
                    aria-label="Outcomes"
                    value={(scores.outcomes)}
                    step={5}
                    onChange={(e: any, value: any, thumb: any) => updateSliderValue(e, value, 'outcomes')}
                    valueLabelDisplay="auto"
                />
            </div>
            <div>
                <div className={classes.sliderLabel}>
                    <span className={classes.sliderLabelText}>Diversity</span>
                </div>
                <Slider
                    key="diversitySliderControl"
                    color="secondary"
                    aria-label="Diversity"
                    value={(scores.diversity)}
                    step={5}
                    onChange={(e: any, value: any, thumb: any) => updateSliderValue(e, value, 'diversity')}
                    valueLabelDisplay="auto"
                />
            </div>
        </div>
    );
}