import styled from "styled-components";

// ?!TableHeader styled components code here

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  padding: 5px;
  background: ${(props: any) =>
    props.theme?.themePresets?.table?.background || "#fff"};
  color: ${(props: any) => props.theme?.themePresets?.table?.text || "black"};
`;
// thead code here
export const TableHeader = styled.thead`
  color: ${(props: any) => props.theme?.themePresets?.table?.text || "black"};
  background: ${(props: any) =>
    props.theme?.themePresets?.table?.background || "#fff"};
`;
// table row code here
export const TableRow = styled.tr`
  border-bottom: ${(props: any) =>
      props.theme?.themePresets?.table?.celltext || "#eee"}
    1px solid;
`;
// table head code here
export const TableHead = styled.th`
  text-align: left;
  padding: 8px;
`;
// table data code here
export const TableData = styled.td`
  padding: 8px;
  color: ${(props: any) => props.theme?.themePresets?.table?.celltext || ""};
`;
export const TableBody = styled.tbody`
  background: ${(props: any) =>
    props.theme?.themePresets?.table?.background || ""};
`;

// ?! table checkbox code here
export const TableCheckbox = styled.input`
  background: red;
`;

// ?! no data found styled components code here for table
export const TableDataNone = styled.div`
  height: 100px;
  color: #070000;
  font-size: 24px;
  font-weight: 500;
  border: 1px solid #e4e4e4;
  margin: 12px;
`;
export const TableHeaderNone = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  color: #070000;
  line-height: 31px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-around;
`;
export const TableHeaderFirst = styled.div`
  text-align: center;
  width: 100%;
  border-right: 1px solid #e4e4e4;
`;
export const TableHeaderLast = styled.div`
  text-align: center;
  width: 100%;
`;
export const TableDataLast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 15px;
`;
