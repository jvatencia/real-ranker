function toPercent(val: number){
  return Math.round(val*100) + '%';
}
function toLetterGrade(val: number) {
  if (val > .9666) {
    return 'A+';
  }
  else if ( val > .9333) {
    return 'A';
  }
  else if ( val > .90) {
    return 'A-';
  }
  else if ( val > .8666) {
    return 'B+';
  }
  else if ( val > .8333) {
    return 'B';
  }
  else if ( val > .80) {
    return 'B-';
  }
  else if ( val > .7666) {
    return 'C+';
  }
  else if ( val > .7333) {
    return 'C';
  }
  else if ( val > .70) {
    return 'C-';
  }
  else if ( val > .6666) {
    return 'D+';
  }
  else if ( val > .6333) {
    return 'D';
  }
  else if ( val > .60) {
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