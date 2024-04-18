import { InfoOutlined } from "@mui/icons-material";
import { IconButton, SvgIconPropsColorOverrides } from "@mui/material";
import { ReactNode, useState } from "react";
import CommonModal from "./CommonModal";
import { OverridableStringUnion } from "@mui/types";

interface TooltipModalProps {
    tooltipContent: ReactNode | string;
    title?: string;
    iconSize?: 'small' | 'inherit' | 'large' | 'medium';
    infoTheme?: OverridableStringUnion<
        | 'inherit'
        | 'action'
        | 'disabled'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning',
        SvgIconPropsColorOverrides
    >;
}
export function TooltipModal({ tooltipContent, infoTheme, iconSize }: Readonly<TooltipModalProps>) {
    const [showTooltip, setShowTooltip] = useState(false);

    const closeTooltip = () => {
        setShowTooltip(false);
    }
    return (
        <>
            <IconButton onClick={() => setShowTooltip(true)} style={{ padding: 0 }}>
                <InfoOutlined fontSize={iconSize ?? 'small'} color={infoTheme ?? 'warning'} style={{ fontSize: '16px', marginLeft: '5px' }} />
            </IconButton>
            <CommonModal
                showDialog={showTooltip}
                handleModalClose={closeTooltip}

            >
                <div>{tooltipContent}</div>
            </CommonModal>
        </>
    );
}