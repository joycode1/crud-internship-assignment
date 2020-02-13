import React from 'react'
import {useTable} from "react-table";
import classes from './Table.module.css';

const Table = props => {
    const {columns, data} = props;
    const mapHomeStudy = {
        true: 'Yes',
        false: 'No'
    };
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data
    });

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(
                (row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                console.log(cell.column.id)
                                return <td {...cell.getCellProps()}>{cell.column.id === 'homeStudy'? mapHomeStudy[cell.value]: cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                }
            )}
            </tbody>
        </table>
    )
};

export default Table;