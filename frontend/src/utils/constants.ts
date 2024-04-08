import { AccountCircle, ManageAccounts, SegmentOutlined } from "@mui/icons-material";

export const BASE_URL: string = ``;
export const ASSET_URL: string = `https://testing.thetestguytutors.com`;

export const DEFAULT_HEADERS = {
    Accept: "application/json",
    'Content-Type': 'application/json; charset=utf8'
};

export const PUBLIC_NAV_ROUTES = [
    { title: 'About', url: '/about', isDisabled: false },
    { title: 'Values', url: '/values', isDisabled: false },
    { title: 'Results', url: '/results', isDisabled: false },
    { title: 'Essays', url: '/essays', isDisabled: false },
    { title: 'Test Prep', url: '/test-prep', isDisabled: false },
    { title: 'ADHD', url: '/adhd', isDisabled: false },
    { title: 'Bright Futures', url: '/bright-futures', isDisabled: false },
];

export const PUBLIC_SERVICES = [
    {
        icon: '/assets/welcome/test.png',
        title: 'Personalized Test Prep',
        description: 'Our highly personalized, one-on-one strategic test prep will ensure you stun the SAT or ace the ACT. We harness the full potential of superscoring, as well as incorporating hacks, tricks, and time-saving techniques.'
    },
    {
        icon: '/assets/welcome/admission.png',
        title: 'College Admissions',
        description: 'Aim. Appy. Accept. Our bespoke ccollege counseling service will help you choose the right schools to apply to, strategize your extracurriculars and honors, fill in gaps, and make your common app not common at all'
    },
    {
        icon: 'assets/welcome/editor.png',
        title: 'Essays & Personal Branding',
        description: "College applications are a branding exercise. Work with professional writers, editors, and branding experts to tell a story admissions counselors can't put down."
    }
];

export const PUBLIC_TESTIMONIALS = [
    {
        id: 1,
        url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Amy-60-second-version.mp4',
        thumbnail: '/assets/testimonials/amy.png',
        details: {
            speaker: 'AMY',
            content: 'We really felt that our daughter had a responsibility to Jacob and to be prepared'
        }
    },
    {
        id: 2,
        url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Borezan-60-second-version.mp4',
        thumbnail: '/assets/testimonials/ally.png',
        details: {
            speaker: 'ALLY',
            content: 'Focus was not a strong suit for him so I was looking for someone who understood'
        }
    },
    {
        id: 3,
        url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Gary-Pilnick-60-seconds.mp4',
        thumbnail: '/assets/testimonials/gary.png',
        details: {
            speaker: 'GARY',
            content: 'It was more than just taking exams'
        }
    },
    {
        id: 4,
        url: 'https://thetestguy.com/dev/wp-content/uploads/2023/12/Tolliver-60-second.mp4',
        thumbnail: '/assets/testimonials/tolliver.png',
        details: {
            speaker: '',
            content: 'He would be so flexible to work with... He is a kind of a tutor that cares about you as a person.'
        }
    },
];

export const COLOR_PALETTES = [
    { bg: '#3c7c28', text: '#fff' },
    { bg: '#433ba8', text: '#fff' },
    { bg: '#d9a900', text: '#fff' },
    { bg: '#412a7c', text: '#fff' },
    { bg: '#f28291', text: '#fff' },
    { bg: '#222224', text: '#fff' },
    { bg: '#c75700', text: '#fff' },
    { bg: '#0514ca', text: '#fff' },
    { bg: '#d70000', text: '#fff' },
    { bg: '#009ade', text: '#fff' },
    { bg: '#613838', text: '#fff' },
    { bg: '#ce00ce', text: '#fff' },
];

export const FAMILY_INCOME_RANGE = [
    { text: '$0 - $30k', value: 1 },
    { text: '$30k - $48k', value: 2 },
    { text: '$48k - $75k', value: 3 },
    { text: '$75k - $110k', value: 4 },
    { text: '$110k +', value: 5 },
];

export const DEFAULT_YES_NO_LIST = [
    { text: 'No', value: 0 },
    { text: 'Yes', value: 1 },
];

export const SELF_EVALUATION = [
    { text: 'Not Rigorous', value: 0 },
    { text: 'Below Average', value: 1 },
    { text: 'Average', value: 2 },
    { text: 'Above Average', value: 3 },
    { text: 'Hard', value: 4 },
    { text: 'Very Hard', value: 5 },
];

export const ACTIVITY_TYPE_LIST = [
    { text: 'Sports', value: 'sports' },
    { text: 'Customer Service', value: 'cs' },
    { text: 'Education', value: 'education' },
    { text: 'Others', value: 'others' },
];

export const ROUTING = {
    REDIRECT_AFTER_LOGIN: '/colleges/compare'
};

export const FONT_FAMILY = {
    DEFAULT: 'Poppins',
    POPPINS: 'Poppins',
    POPPINS_BOLD: 'Poppins-Bold',
    POPPINS_THIN: 'Poppins-Thin',
    MONTSERRAT: 'Montserrat',
    MONTSERRAT_BOLD: 'Montserrat-Bold',
    MONTSERRAT_THIN: 'Montserrat-Thin',
    CAVEAT: 'Caveat',
    AVERIA: 'Averia',
    PTSANS: 'PT Sans',
    PTSANS_BOLD: 'PT Sans - Bold',
    CHOCOLATE: 'Chocolate',
    CHOCOLATE_BOLD: 'Chocolate - Bold',
    CHOCOLATE_MEDIUM: 'Chocolate - Medium',
    CHOCOLATE_ITALIC: 'Chocolate - Italic',
};

export const PROFILE_MENU_ITEMS = [
    {
        icon: ManageAccounts,
        title: 'Account Information',
        url: '/profile/account-info'
    },
    {
        icon: AccountCircle,
        title: 'Personal Information',
        url: '/profile/personal-info'
    }, {
        icon: SegmentOutlined,
        title: 'Real Ranker Colleges',
        url: '/profile/selected-colleges'
    },
];

export const FIPS_STATES = [
    { id: 1, name: 'Alabama', },
    { id: 2, name: 'Alaska', },
    { id: 4, name: 'Arizona', },
    { id: 5, name: 'Arkansas', },
    { id: 6, name: 'California', },
    { id: 8, name: 'Colorado', },
    { id: 9, name: 'Connecticut', },
    { id: 10, name: 'Delaware', },
    { id: 11, name: 'District of Columbia', },
    { id: 12, name: 'Florida' },
    { id: 13, name: 'Georgia', },
    { id: 15, name: 'Hawaii', },
    { id: 16, name: 'Idaho', },
    { id: 17, name: 'Illinois', },
    { id: 18, name: 'Indiana', },
    { id: 19, name: 'Iowa', },
    { id: 20, name: 'Kansas', },
    { id: 21, name: 'Kentucky', },
    { id: 22, name: 'Louisiana', },
    { id: 23, name: 'Maine', },
    { id: 24, name: 'Maryland', },
    { id: 25, name: 'Massachusetts', },
    { id: 26, name: 'Michigan', },
    { id: 27, name: 'Minnesota', },
    { id: 28, name: 'Mississippi', },
    { id: 29, name: 'Missouri', },
    { id: 30, name: 'Montana', },
    { id: 31, name: 'Nebraska', },
    { id: 32, name: 'Nevada', },
    { id: 33, name: 'New Hampshire', },
    { id: 34, name: 'New Jersey', },
    { id: 35, name: 'New Mexico', },
    { id: 36, name: 'New York', },
    { id: 37, name: 'North Carolina', },
    { id: 38, name: 'North Dakota', },
    { id: 39, name: 'Ohio', },
    { id: 40, name: 'Oklahoma', },
    { id: 41, name: 'Oregon', },
    { id: 42, name: 'Pennsylvania', },
    { id: 44, name: 'Rhode Island', },
    { id: 45, name: 'South Carolina', },
    { id: 46, name: 'South Dakota', },
    { id: 47, name: 'Tennessee', },
    { id: 48, name: 'Texas', },
    { id: 49, name: 'Utah', },
    { id: 50, name: 'Vermont', },
    { id: 51, name: 'Virginia', },
    { id: 53, name: 'Washington', },
    { id: 54, name: 'West Virginia', },
    { id: 55, name: 'Wisconsin', },
    { id: 56, name: 'Wyoming', },
    { id: 60, name: 'American Samoa', },
    { id: 64, name: 'Federated States of Micronesia', },
    { id: 66, name: 'Guam', },
    { id: 69, name: 'Northern Mariana Islands', },
    { id: 70, name: 'Palau', },
    { id: 72, name: 'Puerto Rico', },
    { id: 78, name: 'Virgin Islands', },
];