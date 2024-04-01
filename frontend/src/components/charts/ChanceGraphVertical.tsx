import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { COLOR_PALETTES, devices, getAcceptanceRate, randomColor } from "../../utils";
import { Chip, ClickAwayListener, Tooltip, TooltipProps, Zoom, tooltipClasses, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import useCollegeStore from "../../store/college/college.store";

const useStyles = makeStyles(
    (theme) => ({
        sectionTitle: {
            fontSize: '18px',
            marginLeft: '10px',
            color: theme.palette.primary.main,
            fontWeight: 'bold'
        },
        sectionSummary: {
            padding: '10px',
        },
        sectionSummaryScore: {
            fontSize: '12px !important',
            color: theme.palette.light.main + ' !important',
            fontWeight: 'bold'
        },
        sectionSummaryChip: {
            color: theme.palette.light.main + ' !important',
            marginRight: '5px',
            padding: '0px 5px'
        },
        chanceGraphWrapper: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        chanceGraphSection: {
            width: '100%',
            overflowX: 'auto',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            [theme.breakpoints.up('md')]: {
                justifyContent: 'flex-start'
            }
        },
        graphLabels: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '40px',
        },
        graphLabelWrapper: {
            height: (props: any) => props.height_multiplier + 'px',
            width: (props: any) => props.height_multiplier + 'px',
            borderRight: '2px solid ' + theme.palette.dark.main,
            padding: '5px 5px',
            position: 'relative',
        },
        graphLabelDotted: {
            borderRight: '2px dotted ' + theme.palette.dark.main,
        },
        graphPointIndicator: {
            position: 'absolute',
            top: '0px',
            right: '-7px',
            height: '1px',
            width: '12px',
            border: '1px solid ' + theme.palette.dark.main
        },
        graphPoint: {
            position: 'absolute',
            left: '40px',
            bottom: '85px',
        },
        graphPointCircle: {
            cursor: 'pointer',
            height: '20px',
            width: '20px',
            borderRadius: '50%',
        },
        graphPointContent: {
            width: 'auto',
            whiteSpace: 'nowrap'
        }
    })
);


const PointToolTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip placement="top" {...props} PopperProps={{ style: { zIndex: 10 } }} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.primary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        fontSize: 12,
        padding: 10,
        zIndex: 10
    },
}));

const GraphPointToolTipContent = ({ handleTooltipClose, item, classes }: any) => {
    return (
        <div className={classes.graphPointContent}>
            {item.college.instnm} {item.userScore.toFixed(2)}
        </div>
    );
}

const GraphPoint = ({ item, classes }: any) => {
    const matches = useMediaQuery(devices.mobileL);
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(!open);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div >
                <PointToolTip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    disableFocusListener
                    TransitionComponent={Zoom}
                    open={open}
                    slotProps={{
                        popper: {
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, matches ? -15 : -5]
                                    }
                                }
                            ]
                        }
                    }}
                    sx={{
                        [`& .${tooltipClasses.arrow}`]: {
                            color: item.color
                        },
                        [`& .${tooltipClasses.tooltip}`]: {
                            backgroundColor: item.color,
                            width: 'auto'
                        }
                    }}
                    title={<GraphPointToolTipContent classes={classes} item={item} handleTooltipClose={handleTooltipClose} />}>
                    <div
                        className={classes.graphPointCircle}
                        onClick={handleTooltipOpen}
                        style={{
                            backgroundColor: item.color
                        }}
                    >

                    </div>
                </PointToolTip>
            </div>
        </ClickAwayListener>
    );

}

interface ChanceGraphVerticalProps {
    data: any;
}

export default function ChanceGraphVertical({ data }: Readonly<ChanceGraphVerticalProps>) {
    const HEIGHT_MULTIPLIER = 40;
    const classes = useStyles({ height_multiplier: HEIGHT_MULTIPLIER });
    const [chartData, setChartData] = useState<any[]>([]);
    const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const form = useCollegeStore((state) => state.form);

    const initData = () => {
        let colors: string[] = [];

        const checkColor = (color: string): string => {
            if (colors.length === COLOR_PALETTES.length) {
                colors = [];
            }

            if (colors.includes(color)) {
                return checkColor(randomColor());
            }

            return color;
        }

        setChartData(
            data.map((college: any) => {
                const color = checkColor(randomColor());
                colors.push(color);

                return {
                    college,
                    color,
                    userScore: getAcceptanceRate(college, form)
                };
            })
        );
    }

    const getPosition = (score: number, index: number) => {
        const yPos = score * HEIGHT_MULTIPLIER;
        const xPos = ((index + 1) * 40);

        return `translate(${xPos}px, -${yPos}px)`;
    }

    useEffect(() => {
        initData();
    }, []);

    return (
        <>
            <div className={classes.sectionTitle}>Your GPA: {form.gpa}</div>
            <div className={classes.sectionSummary}>
                {
                    chartData.map((item, index) => (
                        <Chip
                            size="small"
                            icon={<div className={classes.sectionSummaryScore}>{item.userScore}</div>}
                            label={`${item.college.instnm}(${(item.college.adm_rate * 100).toFixed(2)})`}
                            key={`sectionSummary${index}`}
                            className={classes.sectionSummaryChip}
                            style={{ backgroundColor: item.color }} />
                    ))
                }
            </div>
            <div className={classes.chanceGraphSection}>
                <div className={classes.chanceGraphWrapper}
                    style={{
                        width: chartData.length > 0 ? ((chartData.length + 2) * 50) + 'px' : '100px',
                        height: ((labels.length + 1) * HEIGHT_MULTIPLIER) + 'px'
                    }}>
                    {
                        chartData.length > 0 &&
                        chartData.map((item, index) => (
                            <div className={classes.graphPoint} key={`graphPoint${index}`}
                                style={{ transform: getPosition(item.userScore, index) }}>
                                <GraphPoint classes={classes} item={item} />
                            </div>
                        ))
                    }
                    <div className={classes.graphLabels}>
                        {
                            labels.reverse().map((label, index) => (

                                <div
                                    className={`${classes.graphLabelWrapper} ${((index + 1) > 3 && (index + 1) <= 6) && classes.graphLabelDotted}`}
                                    key={`graphLabelWrapper${index}`}>
                                    <div className={classes.graphPointIndicator}></div>
                                    <div style={{ textAlign: 'right', paddingRight: '10px', transform: 'translateY(-15px)' }}>
                                        {label}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}