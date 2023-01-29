import { imageUrl } from "config";

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
  const minutes = time || 0;

  return new Date(minutes * 60000).toISOString().substr(11, 8);
}

export const formatBudget = ( sum ) => sum ? sum.toLocaleString().replace(/,/g, " ") : '';

export const formatGenresArray = array => {
  if(array) {
    let idsArray = [];

    array.forEach(el => idsArray.push(el.id));

    return idsArray;
  }

  return [];
};

export const calcRatingWidth = rating => {
  const ratingValue = rating * 100 / 10;
  return `${ratingValue}%`;
};

export const imageFullUrl = ( { imagePath, imgUrl = imageUrl } ) => {
  if(imagePath === null) {
    return ` `;
  }else {
    return `${imgUrl+imagePath}`;
  }
};