import { NavLinkItem } from "./interfaces";

export const sidebarItems: NavLinkItem[] = [
    { text: 'Colleges', items: [], url: '/colleges', isActive: false },
    {
        text: 'Coaching',
        isActive: false,
        items: [
            { text: 'Test Prep', url: '/test-prep', items: [], isActive: false },
            { text: 'Essays', url: '/essays', items: [], isActive: false },
            { text: 'ADHD', url: '/adhd', items: [], isActive: false },
        ],
        url: '/coaching'
    },
    { text: 'Articles', items: [], url: '/articles', isActive: false },
    { text: 'About Us', items: [], url: '/about-us', isActive: false },
    { text: 'Login', items: [], url: '/login', isActive: false }
];