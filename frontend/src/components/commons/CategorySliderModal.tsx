import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slider } from "@mui/material";
import { title } from "process";
import useCollegeStore from "../../store/college/college.store";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme) => ({
        dialogContent: {
            overflow: 'hidden',
            padding: '20px 24px'
        }
    })
);


interface CategorySliderModalProps {
    showDialog: boolean;
    handleClose: () => void;
}

export default function CategorySliderModal({ showDialog, handleClose }: Readonly<CategorySliderModalProps>) {
    const userScores = useCollegeStore((state) => state.userScore);
    const updateUserScores = useCollegeStore((state) => state.updateUserScores)
    const classes = useStyles();

    const [allocationPoints, setAllocationPoints] = useState(0);
    const [scores, setScores] = useState<any>(userScores);

    console.log('CategorySliderModal showDialog', showDialog);

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
        <Dialog
            maxWidth={'sm'}
            fullWidth
            open={showDialog}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>Category Sliders | Remaining Points: {allocationPoints}</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <div>
                    <div>
                        <div>Success</div>
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
                        <div>Value</div>
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
                        <div>Cost</div>
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
                        <div>Outcomes</div>
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
                        <div>Diversity</div>
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}