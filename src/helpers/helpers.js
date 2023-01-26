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

export const imageFullUrl = ( imageUrl, imagePath ) => {
  if(imagePath === null) {
    return ` `;
  } else {
    return `${imageUrl+imagePath}`;
  }
};
