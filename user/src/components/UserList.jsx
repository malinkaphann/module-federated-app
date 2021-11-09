import {
  Button,
  DataTable,
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarMenu,
  TableToolbarSearch,
} from "carbon-components-react";
import React, { useEffect, useState } from "react";
import { Delete16, Save16, Download16 } from "@carbon/icons-react";
import { getUsersFromLocal } from "@/shared/services/user-service";

const UserList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetch = async () => {
      const data = await getUsersFromLocal();
      setUsers(data);
    }

    fetch();

  }, [])

  const headers = [
    {
      key: "id",
      header: "ID",
    },
    {
      key: "name",
      header: "Name",
    },
    {
      key: "status",
      header: "Status",
    },
  ];

  const batchActionClick = (rows) => {};
  const action = () => {};

  return (
    <div style={{ width: "100%" }}>
      <DataTable rows={users} headers={headers}>
        {({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getSelectionProps,
          getToolbarProps,
          getBatchActionProps,
          onInputChange,
          selectedRows,
          getTableProps,
          getTableContainerProps,
        }) => (
          <TableContainer
            title="User List"
            description="With or without access control"
            {...getTableContainerProps()}
          >
            <TableToolbar {...getToolbarProps()}>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Delete16}
                  onClick={batchActionClick(selectedRows)}
                >
                  Delete
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Save16}
                  onClick={batchActionClick(selectedRows)}
                >
                  Save
                </TableBatchAction>
                <TableBatchAction
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? 0 : -1
                  }
                  renderIcon={Download16}
                  onClick={batchActionClick(selectedRows)}
                >
                  Download
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch
                  persistent={true}
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onChange={onInputChange}
                />
                <TableToolbarMenu
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                >
                  <TableToolbarAction onClick={() => alert("Alert 1")}>
                    Action 1
                  </TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert 2")}>
                    Action 2
                  </TableToolbarAction>
                  <TableToolbarAction onClick={() => alert("Alert 3")}>
                    Action 3
                  </TableToolbarAction>
                </TableToolbarMenu>
                <Button
                  tabIndex={
                    getBatchActionProps().shouldShowBatchActions ? -1 : 0
                  }
                  onClick={action("Add new row")}
                  size="small"
                  kind="primary"
                >
                  Add new
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map((header, i) => (
                    <TableHeader key={i} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i} {...getRowProps({ row })}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
  );
};

export default UserList;
