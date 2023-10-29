import { createContext, useContext } from 'react';
import {
  Empty,
  StyledBody,
  StyledHeader,
  StyledRow,
  StyledTable,
  Footer,
} from './style';
const TableContext = createContext();

const Table = ({ columns, children }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
};
const Header = ({ children }) => {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="header" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
};
const Row = ({ children }) => {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
};
const Body = ({ data, render }) => {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
