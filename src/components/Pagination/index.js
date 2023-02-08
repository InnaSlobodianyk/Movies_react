import { usePagination, DOTS } from "hooks/usePagination";

import cn from "classnames";

import PaginationItem from "./PaginationItem";

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

  const isPaginationRange = currentPage > 0 || paginationRange.length > 1;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange.slice(-1)[0];

  return isPaginationRange ? (
    <ul className={ cn( styles.pagination, { [className]: className } ) }>
      <PaginationItem
        onClick={ onPrevious }
        disabled={ currentPage === 1 }
      >
        <span className={ cn( styles.paginationArrow, styles.paginationArrowLeft ) } />
      </PaginationItem>

      { paginationRange.map( ( pageNumber, index ) => (
        pageNumber === DOTS
          ? (
            <PaginationItem
              key={ index }
              disabled={ true }
            >
              { DOTS }
            </PaginationItem>
          ) : (
            <PaginationItem
              key={ index }
              onClick={ () => onPageChange(pageNumber) }
              selected={ pageNumber === currentPage }
            >
              { pageNumber }
            </PaginationItem>
          )
      ) ) }

      <PaginationItem
        onClick={ onNext }
        disabled={ currentPage === lastPage }
      >
        <span className={ cn( styles.paginationArrow, styles.paginationArrowRight ) } />
      </PaginationItem>
    </ul>
  ) : null;
}

export default Pagination;