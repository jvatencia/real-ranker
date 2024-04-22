import { FieldErrors } from "react-hook-form";
import { COLOR_PALETTES } from "./constants";

export const toPercent = (val: number) => {
  return Math.round(val * 100) + '%';
}
export const toLetterGrade = (val: number) => {
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

export function getScore(college: any, prefix: string) {
  return .4 * college[`${prefix}_relative`] + .6 * college[`${prefix}_absolute`]
}

export function validateEmail(email: string) {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return true;
  } else {
    return false;
  }
}


export const computeUserScore = (college: any, userScores: any, form: any) => {


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

export const randomColor = () => {
  const rand = Math.floor(Math.random() * COLOR_PALETTES.length);

  return COLOR_PALETTES[rand];
}

const dec2hex = (dec: number) => {
  return dec.toString(16).padStart(2, "0")
}

export const generateId = (len: number) => {
  const arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}

export const getErrorMessage = (errors: FieldErrors<any>, fieldName: string, errorMessage: string, errorType: 'required' = 'required') => {
  return !!errors[fieldName] && errors[fieldName]?.type === errorType && errorMessage;
}


const checkValue = (val: any): string => {

  if (typeof val === 'number')
    return val.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (typeof val === 'string' && !val.includes('%'))
    return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return val;
}

export const formatNumber = (value: any, isMoney = false) => {

  if (isMoney) {
    let val: number = typeof value === 'number' ? value : parseFloat(value.toString().replace(/,/g, ''));
    return val > 0 ? `$${checkValue(value)}` : `- $${(checkValue(val * -1))}`;
  }

  return checkValue(value);
}

export const getSchoolAcronym = (value: string) => {
  const excludedWords = ['of', 'the'];
  const stringArr = value.split(' ');
  const acronymArr: string[] = [];

  stringArr.forEach((word: string, index: number) => {
    if (!excludedWords.includes(word.toLowerCase())) {
      acronymArr.push(word.charAt(0).toUpperCase());
    }
  });

  return acronymArr.join('');
}