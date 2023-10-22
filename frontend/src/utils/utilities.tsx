function toPercent(val: number){
  return Math.round(val*100) + '%';
}
function toLetterGrade(val: number) {
  console.log(val, typeof val);
  if (val > .9333) {
    return 'A+';
  }
  else if ( val > .8666) {
    return 'A';
  }
  else if ( val > .80) {
    return 'A-';
  }
  else if ( val > .7333) {
    return 'B+';
  }
  else if ( val > .6666) {
    return 'B';
  }
  else if ( val > .6) {
    return 'B-';
  }
  else if ( val > .5333) {
    return 'C+';
  }
  else if ( val > .4666) {
    return 'C';
  }
  else if ( val > .4) {
    return 'C-';
  }
  else if ( val > .3333) {
    return 'D+';
  }
  else if ( val > .2666) {
    return 'D';
  }
  else if ( val > .2) {
    return 'D-';
  }
  else {
    return 'F';
  }
}

function getScore(college: any, prefix: string) {
 return .4*college[`${prefix}_relative`] + .6*college[`${prefix}_absolute`]
}

export { toPercent, toLetterGrade, getScore };