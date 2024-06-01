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
  width: 90%;
  height: 300px;
  overflow: auto;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 8px;

  table {
    height: 300px;
  }

  th {
    background-color: #a4bab7;
    position: sticky;
    top: 0;
  }

  table,
  td,
  th {
    text-align: center;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 15px;
    border: 1px solid #ddd;
  }

  // Remove the borders on the edges of the table
  // This border will be set by its wrapping container
  tr {
    :first-of-type {
      border-left: unset;
    }
    :last-of-type {
      border-right: unset;
    }
  }
  thead {
    th {
      border-top: unset;
    }
  }
  tbody {
    tr:last-of-type {
      td {
        border-bottom: unset;
      }
    }
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
