// export const BASE_URL: string = `https://www.thetestguytutors.com`;
// export const BASE_URL: string = `https://real-ranker-backend.uc.r.appspot.com`;
export const BASE_URL: string = ``;

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