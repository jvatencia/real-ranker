import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { COLOR_PALETTES, devices, getScore, randomColor } from "../../utils";
import { ClickAwayListener, Tooltip, TooltipProps, Zoom, tooltipClasses, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

const useStyles = makeStyles(
    (theme) => ({
        chanceGraphWrapper: {
            width: '100%',
            padding: '10px',
            position: 'relative',
            overflowX: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        graphLabels: {
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '40px',
        },
        graphLabelWrapper: {
            width: '60px',
            borderTop: '2px solid ' + theme.palette.dark.main,
            padding: '5px 5px'
        },
        graphPoint: {
            position: 'absolute',
            left: '0',
            bottom: '40px',
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
            {item.college.instnm} {item.userScore.toFixed(1)}
        </div>
    );
}

const GraphPoint = ({ item, classes }: any) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(!open);
    };

    const matches = useMediaQuery(devices.mobileL);

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
                                        offset: [0, -15]
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

interface ChanceGraphProps {
    data: any[];
}

export default function ChanceGraph({ data }: ChanceGraphProps) {
    const classes = useStyles();
    const [chartData, setChartData] = useState<any[]>([])
    const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        initData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log('chartData', chartData);
    }, [chartData]);

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

        setChartData(data.map((college: any) => {
            let npt43Key = college['npt43_priv'] > 0 ? 'npt43_priv' : 'npt43_pub';
            npt43Key = college.hasOwnProperty(`${npt43Key}_absolute`) && college.hasOwnProperty(`${npt43Key}_relative`) ? npt43Key : 'npt43';
            const color = checkColor(randomColor());
            colors.push(color);

            return {
                college,
                color,
                userScore: (((getScore(college, 'success') + getScore(college, 'outcomes') + getScore(college, npt43Key) + getScore(college, 'economic_inclusion_score')) / 4) * 10)
            };
        }));
    }

    const getPosition = (score: number, index: number) => {
        const xPos = score * 60;
        const yPos = ((index + 1) * 25);

        return `translate(${xPos}px, -${yPos}px)`;
    }
    return (
        <div className={classes.chanceGraphWrapper}
            style={{ height: chartData.length > 0 ? ((chartData.length + 2) * 50) + 'px' : '100px' }}>
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
                    labels.map((label, index) => (
                        <div className={classes.graphLabelWrapper} key={`graphLabelWrapper${index}`}>
                            <div>
                                {label}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}