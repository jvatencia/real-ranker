export interface NavLinkItem {
    text: string;
    items: Array<NavLinkItem>;
    url: string;
    handler?: () => any;
    isActive: boolean;
    showWhen?: string;
}