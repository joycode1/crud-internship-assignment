import React from 'react'
import {useTable} from "react-table";
import './Table.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import Button from "../Button/Button";

const Table = props => {
    const {columns, data, deleteHandler, editHandler} = props;
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

    return (
        <React.Fragment>
            <table className="table-bordered table-striped"  {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup, i) => (
                    <tr key={i}  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th scope="col" {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(
                    (row) => {
                        prepareRow(row);
                        return (
                            <tr  {...row.getRowProps()}>
                                {row.cells.map((cell, i) => {
                                    if (row.cells.length - 1 !== i) {
                                        return <td
                                            key={i} {...cell.getCellProps()}>{cell.column.id === 'homeStudy' ? mapHomeStudy[cell.value] : cell.render('Cell')}</td>
                                    }
                                    return (
                                        <td key={i} style={{display: 'flex'}}>
                                            <Button btnClass="btn btn-success"
                                                    clicked={editHandler.bind(undefined, row.original.appId)}><FontAwesomeIcon
                                                icon={faEdit}
                                            /></Button>
                                            <Button btnClass="btn btn-danger"
                                                    clicked={deleteHandler.bind(undefined, row.original.appId)}><FontAwesomeIcon
                                                icon={faTrashAlt}/></Button>
                                        </td>
                                    )

                                })}
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </React.Fragment>
    )
};

export default Table;