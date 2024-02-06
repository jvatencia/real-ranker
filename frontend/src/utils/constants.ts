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
]