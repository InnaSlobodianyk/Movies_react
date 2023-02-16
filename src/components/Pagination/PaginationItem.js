import cn from "classnames";

import styles from "./Pagination.module.scss";

const PaginationItem = ( {
  disabled = false,
  selected = false,
  pageNumber,
  onPageChange,
  children
} ) => {
  const pagingClassName = cn({
    [styles.paginationItem]: true,
    [styles.paginationItemDisabled]: disabled,
    [styles.paginationItemSelected]: selected
  });

  const handlePageChange = () => {
    if(typeof pageNumber !== 'number') {
      onPageChange();
    } else {
      onPageChange(pageNumber);
    }
  };

  return (
    <li
      className={ pagingClassName }
      onClick={ handlePageChange }
    >
      { children }
    </li>
  );
};

export default PaginationItem;