import cn from "classnames";

import styles from "./Pagination.module.scss";

const PaginationItem = ( {
  currentPage,
  next = false,
  prev = false,
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

  const onNext = () => {
    onPageChange(++currentPage);
  };

  const onPrevious = () => {
    onPageChange(--currentPage);
  };

  const onPageNumber = () => {
    onPageChange(pageNumber);
  };

  return (
    <li
      className={ pagingClassName }
      onClick={ prev ? onPrevious : next ? onNext : onPageNumber }
    >
      { children }
    </li>
  );
};

export default PaginationItem;