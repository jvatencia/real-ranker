import useAuthStore from "../store/auth/auth.store";
import { NavLinkItem } from "./interfaces";
import { sizes } from "./breakpoints";

export const publicItems: NavLinkItem[] = [
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

export const authItems: NavLinkItem[] = [
    {
        text: 'Home',
        items: [],
        url: '/home',
        isActive: false
    },
    {
        text: 'Colleges',
        items: [
            {
                text: 'Compare Collge',
                items: [],
                url: '/colleges/compare',
                isActive: false
            },
        ],
        url: '/colleges',
        isActive: false
    },
    {
        text: 'My Timeline',
        items: [],
        url: '/timeline',
        isActive: false
    },
    {
        text: 'Profile',
        items: [],
        showWhen: sizes.tablet,
        url: '/profile',
        isActive: false
    },
    {
        text: 'Logout',
        items: [], url: '/login',
        showWhen: sizes.tablet,
        handler: () => {
            useAuthStore.getState().logout();
        },
        isActive: false
    }

]