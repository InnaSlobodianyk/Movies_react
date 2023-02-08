import cn from "classnames";

import styles from "./Pagination.module.scss";

const PaginationItem = ( { onClick, disabled = false, selected = false, children } ) => (
  <li
    className={ cn( styles.paginationItem, disabled && styles.paginationItemDisabled, selected && styles.paginationItemSelected ) }
    onClick={ onClick }
  >
    { children }
  </li>
);

export default PaginationItem;