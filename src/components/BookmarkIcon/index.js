import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';

import Button, { BUTTON_SIZES, BUTTON_VARIANTS } from 'components/Button';

import styles from './BookmarkIcon.module.scss';

const BookmarkIcon = ( { isMarked, movieId, onMark, onUnmark } ) => {
  return (
    <>
      { isMarked ? (
        <Button
          className={ styles.icon }
          data-hash={ movieId }
          onClick={ onUnmark }
          disabled={ !isMarked }
          variant={ BUTTON_VARIANTS.transparent }
          size={ BUTTON_SIZES.small }
        >
          <IoBookmark className={ styles.iconSvg }/>
        </Button>
      ) : (
        <Button
          className={ styles.icon }
          data-hash={ movieId }
          onClick={ onMark }
          disabled={ isMarked }
          variant={ BUTTON_VARIANTS.transparent }
          size={ BUTTON_SIZES.small }
        >
          <IoBookmarkOutline className={ styles.iconSvg } />
        </Button>
      ) }
    </>
  );
}

export default BookmarkIcon;
