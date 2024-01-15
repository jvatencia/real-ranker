import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slider } from "@mui/material";
import { title } from "process";
import useCollegeStore from "../../store/college/college.store";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    (theme) => ({
        dialogContent: {
            overflow: 'hidden',
            padding: '20px 24px'
        }
    })
);

const stepperIndicators = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 80,
        label: '80',
    },
    {
        value: 100,
        label: '100',
    },
];

interface CategorySliderModalProps {
    showDialog: boolean;
    handleClose: () => void;
}

export default function CategorySliderModal({ showDialog, handleClose }: Readonly<CategorySliderModalProps>) {
    const userScores = useCollegeStore((state) => state.userScore);
    const updateUserScores = useCollegeStore((state) => state.updateUserScores)
    const classes = useStyles();

    console.log('CategorySliderModal showDialog', showDialog);

    const updateSliderValue = (event: any, category: 'success' | 'value' | 'cost' | 'outcomes' | 'diversity') => {
        updateUserScores({
            [category]: event.target.value
        })
    }

    return (
        <Dialog
            maxWidth={'md'}
            fullWidth
            open={showDialog}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>Category Sliders</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <div>Success</div>
                <Slider
                    key="successSliderControl"
                    aria-label="Success"
                    value={(userScores.success)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'success')}
                    valueLabelDisplay="auto"
                    marks={stepperIndicators}
                />
                <div>Value</div>
                <Slider
                    key="valueSliderControl"
                    aria-label="Value"
                    value={(userScores.value)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'value')}
                    valueLabelDisplay="auto"
                    marks={stepperIndicators}
                />
                <div>Cost</div>
                <Slider
                    key="costSliderControl"
                    aria-label="Cost"
                    value={(userScores.cost)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'cost')}
                    valueLabelDisplay="auto"
                    marks={stepperIndicators}
                />
                <div>Outcomes</div>
                <Slider
                    key="outcomesSliderControl"
                    aria-label="Outcomes"
                    value={(userScores.outcomes)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'outcomes')}
                    valueLabelDisplay="auto"
                    marks={stepperIndicators}
                />
                <div>Diversity</div>
                <Slider
                    key="diversitySliderControl"
                    aria-label="Diversity"
                    value={(userScores.diversity)}
                    step={5}
                    onChange={(e: any) => updateSliderValue(e, 'diversity')}
                    valueLabelDisplay="auto"
                    marks={stepperIndicators}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}