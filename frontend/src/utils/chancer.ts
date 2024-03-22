

interface ScoreModifierOptions {
    condition: 'above' | 'below' | 'par',
    min?: number;
    max?: number;
    scoreModifier: number;
}

interface RateConditionOptions {
    min: number;
    max: number;
    startingScore: number;
    avgGPA: number;
    gpaModifier: ScoreModifierOptions[];
    rigorSelfEval: ScoreModifierOptions[];
    upwardTrajectory: number;
    academicDisruption: number;
    familyObligation: number;
    lowIncome: number;
    firstGen: number;
}


const SCORE_OPTIONS: RateConditionOptions[] = [
    {
        min: 0,
        max: 14,
        startingScore: 2.5,
        avgGPA: 3.93,
        gpaModifier: [
            { condition: 'above', min: 0.1, scoreModifier: 0 },
            { condition: 'par', scoreModifier: 0 },
            { condition: 'below', min: 0.1, max: 0.2, scoreModifier: -0.3 },
            { condition: 'below', min: 0.21, max: 0.33, scoreModifier: -0.5 },
            { condition: 'below', min: 0.33, max: 0.45, scoreModifier: -0.75 },
            { condition: 'below', min: 0.45, scoreModifier: -1 },
        ],
        rigorSelfEval: [
            { condition: 'par', min: 5, scoreModifier: 0 },
            { condition: 'par', min: 4, scoreModifier: 0 },
            { condition: 'par', min: 3, scoreModifier: -0.25 },
            { condition: 'par', min: 2, scoreModifier: -0.5 },
            { condition: 'par', min: 1, scoreModifier: -1 },
            { condition: 'par', min: 0, scoreModifier: -1.25 },
        ],
        upwardTrajectory: 0.25,
        academicDisruption: 0.25,
        firstGen: 0.4,
        familyObligation: 0.3,
        lowIncome: 0.2
    },
    {
        min: 15,
        max: 29,
        startingScore: 3,
        avgGPA: 3.76,
        gpaModifier: [
            { condition: 'above', min: 0.1, scoreModifier: 0 },
            { condition: 'par', scoreModifier: 0 },
            { condition: 'below', min: 0.1, max: 0.2, scoreModifier: -0.2 },
            { condition: 'below', min: 0.21, max: 0.33, scoreModifier: -0.5 },
            { condition: 'below', min: 0.33, max: 0.45, scoreModifier: -0.75 },
            { condition: 'below', min: 0.45, scoreModifier: -1 },
        ],
        rigorSelfEval: [
            { condition: 'par', min: 5, scoreModifier: 0 },
            { condition: 'par', min: 4, scoreModifier: 0 },
            { condition: 'par', min: 3, scoreModifier: -0.25 },
            { condition: 'par', min: 2, scoreModifier: -0.5 },
            { condition: 'par', min: 1, scoreModifier: -1 },
            { condition: 'par', min: 0, scoreModifier: -1.25 },
        ],
        upwardTrajectory: 0.3,
        academicDisruption: 0.3,
        firstGen: 0.4,
        familyObligation: 0.3,
        lowIncome: 0.2
    },
    {
        min: 30,
        max: 44,
        startingScore: 3.25,
        avgGPA: 3.68,
        gpaModifier: [
            { condition: 'above', min: 0.1, scoreModifier: 0.25 },
            { condition: 'par', scoreModifier: 0 },
            { condition: 'below', min: 0.1, max: 0.2, scoreModifier: -0.1 },
            { condition: 'below', min: 0.21, max: 0.33, scoreModifier: -0.5 },
            { condition: 'below', min: 0.33, max: 0.45, scoreModifier: -0.75 },
            { condition: 'below', min: 0.45, scoreModifier: -1 },
        ],
        rigorSelfEval: [
            { condition: 'par', min: 5, scoreModifier: 0.5 },
            { condition: 'par', min: 4, scoreModifier: 0.4 },
            { condition: 'par', min: 3, scoreModifier: 0.3 },
            { condition: 'par', min: 2, scoreModifier: 0.2 },
            { condition: 'par', min: 1, scoreModifier: 0 },
            { condition: 'par', min: 0, scoreModifier: 0 },
        ],
        upwardTrajectory: 0.4,
        academicDisruption: 0.4,
        firstGen: 0.4,
        familyObligation: 0.3,
        lowIncome: 0.2
    },
    {
        min: 45,
        max: 64,
        startingScore: 4.5,
        avgGPA: 3.63,
        gpaModifier: [
            { condition: 'above', min: 0.1, scoreModifier: 0.4 },
            { condition: 'par', scoreModifier: 0 },
            { condition: 'below', min: 0.1, max: 0.2, scoreModifier: 0 },
            { condition: 'below', min: 0.21, max: 0.33, scoreModifier: -0.5 },
            { condition: 'below', min: 0.33, max: 0.45, scoreModifier: -0.75 },
            { condition: 'below', min: 0.45, scoreModifier: -1 },
        ],
        rigorSelfEval: [
            { condition: 'par', min: 5, scoreModifier: 0.7 },
            { condition: 'par', min: 4, scoreModifier: 0.7 },
            { condition: 'par', min: 3, scoreModifier: 0.6 },
            { condition: 'par', min: 2, scoreModifier: 0.4 },
            { condition: 'par', min: 1, scoreModifier: 0 },
            { condition: 'par', min: 0, scoreModifier: -0.25 },
        ],
        upwardTrajectory: 0.5,
        academicDisruption: 0.6,
        firstGen: 0.3,
        familyObligation: 0.2,
        lowIncome: 0,
    },
    {
        min: 65,
        max: 85,
        startingScore: 6,
        avgGPA: 3.52,
        gpaModifier: [
            { condition: 'above', min: 0.1, scoreModifier: 0.75 },
            { condition: 'par', scoreModifier: 0.25 },
            { condition: 'below', min: 0.1, max: 0.2, scoreModifier: 0 },
            { condition: 'below', min: 0.21, max: 0.33, scoreModifier: -0.25 },
            { condition: 'below', min: 0.33, max: 0.45, scoreModifier: -0.5 },
            { condition: 'below', min: 0.45, scoreModifier: -0.75 },
        ],
        rigorSelfEval: [
            { condition: 'par', min: 5, scoreModifier: 1.25 },
            { condition: 'par', min: 4, scoreModifier: 1 },
            { condition: 'par', min: 3, scoreModifier: 0.8 },
            { condition: 'par', min: 2, scoreModifier: 0.7 },
            { condition: 'par', min: 1, scoreModifier: 0.5 },
            { condition: 'par', min: 0, scoreModifier: 0 },
        ],
        upwardTrajectory: 0.25,
        academicDisruption: 0,
        firstGen: 0.3,
        familyObligation: 0.2,
        lowIncome: 0,
    },
    {
        min: 85,
        max: 100,
        startingScore: 8,
        avgGPA: 3.23,
        gpaModifier: [
            { condition: 'above', min: 0.1, scoreModifier: 1.5 },
            { condition: 'par', scoreModifier: 0.5 },
            { condition: 'below', min: 0.1, max: 0.2, scoreModifier: 0 },
            { condition: 'below', min: 0.21, max: 0.33, scoreModifier: -0.25 },
            { condition: 'below', min: 0.33, max: 0.45, scoreModifier: -0.3 },
            { condition: 'below', min: 0.45, scoreModifier: -0.6 },
        ],
        rigorSelfEval: [
            { condition: 'par', min: 5, scoreModifier: 1.25 },
            { condition: 'par', min: 4, scoreModifier: 1 },
            { condition: 'par', min: 3, scoreModifier: 0.8 },
            { condition: 'par', min: 2, scoreModifier: 0.7 },
            { condition: 'par', min: 1, scoreModifier: 0.5 },
            { condition: 'par', min: 0, scoreModifier: 0 },
        ],
        upwardTrajectory: 0,
        academicDisruption: 0,
        firstGen: 0,
        familyObligation: 0,
        lowIncome: 0,
    }
];

export const getAcceptanceRate = ({ adm_rate }: any, form: any) => {
    const scoreOption = getStartingScore(adm_rate * 100);
    if (scoreOption) {
        const score: number = scoreOption.startingScore;
        const pointModifiers: number[] = [];
        scoreOption.gpaModifier.forEach((item: ScoreModifierOptions) => pointModifiers.push(checkGPA(item, parseFloat(form.gpa), score, scoreOption)));
        scoreOption.gpaModifier.forEach((item: ScoreModifierOptions) => pointModifiers.push(checkEvaluation(item, form.selfEvaluation, score, scoreOption)));
        checkForm(scoreOption, form).forEach((item: number) => pointModifiers.push(item));
        console.log('[pointsModifier]', pointModifiers);
        return score + pointModifiers.reduce((a: number, b: number) => a + b, 0);
    }

    return 0;
}

const checkGPA = (item: ScoreModifierOptions, gpa: number, score: number, scoreOption: RateConditionOptions) => {
    const avgGPA = scoreOption.avgGPA
    if (item.condition === 'above') {
        if (gpa > avgGPA + item.min!) {
            return item.scoreModifier;
        }
    } else if (item.condition === 'par') {
        if (gpa === avgGPA) {
            return item.scoreModifier;
        }
    } else if (item.condition === 'below') {
        if (gpa <= (avgGPA - item.min!) && gpa >= (avgGPA - item.max!)) {
            return item.scoreModifier
        }
    }

    return 0;
}

const checkEvaluation = (item: ScoreModifierOptions, selfEvaluation: number, score: number, scoreOption: RateConditionOptions) => {
    if (item.min === selfEvaluation) {
        return item.scoreModifier
    }

    return 0;
}

const checkForm = (scoreOption: RateConditionOptions, form: any) => {
    const pointModifiers: number[] = [];

    if (form.upwardTrajectory === 1) {
        pointModifiers.push(scoreOption.upwardTrajectory);
    }

    if (form.academicDisruption === 1) {
        pointModifiers.push(scoreOption.academicDisruption);
    }

    if (form.firstGen === 1) {
        pointModifiers.push(scoreOption.firstGen);
    }

    if (form.familyObligation === 1) {
        pointModifiers.push(scoreOption.familyObligation);
    }


    if (form.familyIncome === 1) {
        pointModifiers.push(scoreOption.lowIncome);
    }
    return pointModifiers;
}

const getStartingScore = (rate: number): RateConditionOptions | undefined => {
    return SCORE_OPTIONS.find((item: RateConditionOptions) => rate >= item.min && rate <= item.max);
}
