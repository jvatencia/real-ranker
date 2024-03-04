import { OverridableComponent } from "@mui/types";

export interface NavLinkItem {
    text: string;
    items: Array<NavLinkItem>;
    url: string;
    handler?: () => any;
    isActive: boolean;
    showWhen?: string;
    icon?: OverridableComponent<any>;
}