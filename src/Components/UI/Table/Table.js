import React from 'react'
import {useTable} from "react-table";
import   './Table.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
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
        <table className="table table-bordered table-striped"  {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr  {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th scope="col" {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(
                (row, i) => {
                    prepareRow(row);
                    console.log(row.original.appId)
                    return (
                        <tr  {...row.getRowProps()}>
                            {row.cells.map((cell, i) => {
                                if (row.cells.length - 1 !== i) {
                                    return <td {...cell.getCellProps()}>{cell.column.id === 'homeStudy' ? mapHomeStudy[cell.value] : cell.render('Cell')}</td>
                                }
                                return (
                                    <td style={{display:'flex'}}>
                                        <button type="button" className="btn btn-success"><FontAwesomeIcon icon={faEdit}/></button>
                                        <button type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                    </td>
                                )

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