export const calcDate = releaseDate => {
  if (releaseDate !== '') {
    const date = new Date(releaseDate);
    return date.getFullYear();
  } else {
    return '';
  }
};

export const roundRatingValue = ( rating ) => {
  return parseFloat(rating.toFixed(1));
};

export const formatRuntime = ( time ) => {
  if(time === null || time === 0) return false;

  const hours = Math.floor(time / 60);
  let formattedTime, mins, seconds = '00';

  if(hours) {
    mins = time % 60;

    if(mins < 10) {
      mins = `0${mins}`;
    }

    formattedTime = `${hours}:${mins}:${seconds}`;
  } else {
    mins = time;

    if(mins < 10) {
      mins = `0${mins}`;
    }

    formattedTime = `00:${mins}:${seconds}`;
  }

  return formattedTime;
}

export const formatBudget = ( sum ) => {
  console.log('%c 43434' , 'background: #222; color: #bada55');
  console.log(sum);
  if(typeof sum === 'undefined' || sum === 0) return false;

  // return sum.toLocaleString().replace(/,/g, " ");
  // return sum.toLocaleString().replace(/,/g, " ");
};