function toPercent(val: number) {
  return Math.round(val * 100) + '%';
}
function toLetterGrade(val: number) {
  if (val > .9333) {
    return 'A+';
  }
  else if (val > .8666) {
    return 'A';
  }
  else if (val > .80) {
    return 'A-';
  }
  else if (val > .7333) {
    return 'B+';
  }
  else if (val > .6666) {
    return 'B';
  }
  else if (val > .6) {
    return 'B-';
  }
  else if (val > .5333) {
    return 'C+';
  }
  else if (val > .4666) {
    return 'C';
  }
  else if (val > .4) {
    return 'C-';
  }
  else if (val > .3333) {
    return 'D+';
  }
  else if (val > .2666) {
    return 'D';
  }
  else if (val > .2) {
    return 'D-';
  }
  else {
    return 'F';
  }
}

function getScore(college: any, prefix: string) {
  return .4 * college[`${prefix}_relative`] + .6 * college[`${prefix}_absolute`]
}

function validateEmail(email: string) {
  //https://mailtrap.io/blog/validate-emails-in-react/ from this
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return true;
  } else {
    return false;
  }
}


const computeUserScore = (college: any, userScores: any, form: any) => {


  const cost = getScore(college, `npt4${form['familyIncome']}`);
  const value = getScore(college, `value_${form['familyIncome']}`);
  const success = (0.4 * college['success_relative']) + (0.6 * college['success_absolute']);
  const outcomes = (0.4 * college['outcomes_relative']) + (0.6 * college['outcomes_absolute']);
  const diversity = 0.5 * (((0.4 * college['social_diversity_score_relative']) + (0.6 * college['social_diversity_score_absolute'])) + ((0.4 * college['economic_inclusion_score_relative']) + (0.6 * college['economic_inclusion_score_absolute'])));

  const weights = [
    userScores['success'] / 100,
    userScores['value'] / 100,
    userScores['cost'] / 100,
    userScores['diversity'] / 100,
    userScores['outcomes'] / 100
  ];
  const nums = [success, value, cost, diversity, outcomes]

  return weights.reduce((a: number, b: number, index: number) => {
    return a + (b * nums[index]);
  }, 0);
}

export { toPercent, toLetterGrade, getScore, validateEmail, computeUserScore };