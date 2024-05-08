import React, { useMemo } from "react";
import { styled, css } from "styled-components";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import mData from "../MOCK_DATA.json";

const Container = styled.div`
  display: flex;
  width: fit-content;
  height: 300px;
  overflow-y: auto;
  margin: 0 auto;
  border: 1px solid #ddd;
  table {
    height: 300px;
  }

  th {
    background-color: #892cdc;
    position: sticky;
    top: 0;
  }

  table,
  td,
  th {
    text-align: left;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 15px;
  }
`;
const BaseTable = () => {
  // {
  //     "id": 1,
  //     "first_name": "Jayme",
  //     "last_name": "Christescu",
  //     "email": "jchristescu0@gravatar.com",
  //     "gender": "Male",
  //     "dob": "2023-10-22T05:58:55Z"
  //   },

  const data = useMemo(() => mData, []);
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "First Name",
      accessorKey: "first_name",
      footer: "First Name",
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
      footer: "Last Name",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      footer: "Date of Birth",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => {
            return (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((footer) => (
                  <th key={footer.id}>
                    {flexRender(
                      footer.column.columnDef.footer,
                      footer.getContext()
                    )}
                  </th>
                ))}
              </tr>
            );
          })}
        </tfoot> */}
      </table>
    </Container>
  );
};

export default BaseTable;
