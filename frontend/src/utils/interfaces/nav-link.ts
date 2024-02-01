export interface NavLinkItem {
    text: string;
    items: Array<NavLinkItem>;
    url: string;
    isActive: boolean;
}