const TableRow = ( { children, label, className } ) => (
  <tr>
    <td>{ label }</td>
    <td
      data-label={ label }
      className={ className }
    >
      { children }
    </td>
  </tr>
);

export default TableRow;
