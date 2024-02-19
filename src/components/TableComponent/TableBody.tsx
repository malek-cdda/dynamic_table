export const TableBody = ({
  columns,
  records,
  toggleProduct,
  handleAllDataSelectedRecords,
  showSelectBox,
  rowClass: rowClass = () => {},
}: //
any) => {
  return (
    <tbody>
      {/* table body html code */}
      {records.map((data: any, index: any) => {
        return (
          <tr
            key={index}
            className={
              typeof rowClass === "function"
                ? rowClass(index, data)
                : (rowClass as string)
            }>
            {showSelectBox && (
              <td>
                <input
                  type="checkbox"
                  checked={toggleProduct.some(
                    (item: any) => item.id === data.id
                  )}
                  onChange={() => handleAllDataSelectedRecords(data)}
                />
              </td>
            )}
            {columns.map((header: any, index: any) => (
              <td key={index}>
                {header?.render ? header?.render(data) : data[header.accessor]}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};
