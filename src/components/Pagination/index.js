import { usePagination, DOTS } from "hooks/usePagination";

import cn from "classnames";

import styles from "./Pagination.module.scss";

const Pagination = ( props ) => {
  const {
    onPageChange,
    siblingCount = 1,
    currentPage,
    totalPages,
    className
  } = props;

  const paginationRange = usePagination({
    siblingCount,
    currentPage,
    totalPages
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={ cn( styles.pagination, { [className]: className } ) }>
      <li
        className={ cn( styles.paginationItem, currentPage === 1 && styles.paginationItemDisabled ) }
        onClick={ onPrevious }
      >
        <span className={ cn( styles.paginationArrow, styles.paginationArrowLeft ) } />
      </li>

      { paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={ index } className={ cn( styles.paginationItem, styles.paginationDots ) }>{DOTS}</li>;
        }

        return (
          <li
            key={ index }
            className={ cn( styles.paginationItem, pageNumber === currentPage && styles.paginationItemSelected ) }
            onClick={() => onPageChange(pageNumber)}
          >
            { pageNumber }
          </li>
        );
      })}

      <li
        className={ cn( styles.paginationItem, currentPage === lastPage && styles.paginationItemDisabled ) }
        onClick={ onNext }
      >
        <span className={ cn( styles.paginationArrow, styles.paginationArrowRight ) } />
      </li>
    </ul>
  );
}

export default Pagination;