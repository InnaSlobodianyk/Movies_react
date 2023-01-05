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
  if(typeof sum === 'undefined' || sum === 0) return false;

  return sum.toLocaleString().replace(/,/g, " ");
};

export const formatGenresArray = array => {
  if(array) {
    let idsArray = [];

    array.forEach(el => idsArray.push(el.id));

    return idsArray;
  }
};

export const calcRatingWidth = rating => {
  const ratingValue = rating * 100 / 10;
  return `${ratingValue}%`;
};

export const limitMovieTitle = ( title, limit = 28 ) => {
  const newTitle = [];

  if(title.length > limit) {
    title.split(' ').reduce((acc, cur) => {

      if(acc + cur.length <= limit) {
        newTitle.push(cur);
      }

      return acc + cur.length;
    }, 0);

    return `${newTitle.join(' ')}...`;
  }

  return title;
};

export const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
export const imageFullUrl = ( imageUrl, imagePath ) => {
  if(imagePath === null) {
    return ` `;
  }else {
    return `${imageUrl+imagePath}`;
  }
};