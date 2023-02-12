import { usePagination, DOTS } from "hooks/usePagination";

import cn from "classnames";

import PaginationItem from "./PaginationItem";

import styles from "./Pagination.module.scss";

const Pagination = ( {
   onPageChange,
   siblingCount = 1,
   totalPages,
   className,
   currentPage
} ) => {
  const paginationRange = usePagination({
    siblingCount,
    currentPage,
    totalPages
  });

  const isPaginationRange = currentPage > 0 || paginationRange.length > 1;

  const lastPage = paginationRange.at(-1);

  return isPaginationRange ? (
    <ul className={ cn( styles.pagination, { [className]: className } ) }>
      <PaginationItem
        onPageChange={ onPageChange }
        currentPage={ currentPage }
        disabled={ currentPage === 1 }
        prev
      >
        <span className={ cn( styles.paginationArrow, styles.paginationArrowLeft ) } />
      </PaginationItem>

      { paginationRange.map( ( pageNumber, index ) => (
        pageNumber === DOTS
          ? (
            <PaginationItem
              key={ index }
              currentPage={ currentPage }
              disabled
            >
              { DOTS }
            </PaginationItem>
          ) : (
            <PaginationItem
              key={ index }
              currentPage={ currentPage }
              selected={ pageNumber === currentPage }
              pageNumber={ pageNumber }
              onPageChange={ onPageChange }
            >
              { pageNumber }
            </PaginationItem>
          )
      ) ) }

      <PaginationItem
        onPageChange={ onPageChange }
        currentPage={ currentPage }
        disabled={ currentPage === lastPage }
        next
      >
        <span className={ cn( styles.paginationArrow, styles.paginationArrowRight ) } />
      </PaginationItem>
    </ul>
  ) : null;
}

export default Pagination;