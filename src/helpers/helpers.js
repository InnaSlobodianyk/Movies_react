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

export const imageFullUrl = ( imageUrl, imagePath ) => {
  if(imagePath === null) {
    return ` `;
  } else {
    return `${imageUrl+imagePath}`;
  }
};
