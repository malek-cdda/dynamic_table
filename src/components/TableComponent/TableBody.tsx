export const TableBody = ({
  columns,
  records,
  toggleProduct,
  handleAllDataSelectedRecords,
  showSelectBox,
  rowClass: rowClass = () => {},
  striped = true, // add this line
  hoverHighlight = true, // add this line
  tbColor = "white", // add this line
}: //
any) => {
  // const stripe: boolean | object = {
  //   color: "red",
  // };

  let stripe = striped && typeof striped === "boolean" ? "green" : striped;
  let hover =
    hoverHighlight && typeof hoverHighlight === "boolean"
      ? "hove:bg-gray-200"
      : hoverHighlight;
  return (
    <tbody
      style={{
        color: tbColor,
      }}>
      {/* table body html code */}
      {records.map((data: any, index: any) => {
        return (
          <tr
            style={{
              cursor: "pointer",
              background: stripe && index % 2 === 0 ? stripe : !stripe,
            }}
            key={index}
            className={`
             ${
               typeof rowClass === "function"
                 ? rowClass(index, data)
                 : (rowClass as string)
             }    ${hoverHighlight && hover}
           `}>
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
