import React,{ useState } from 'react';
import './Table.css';
import { Header } from '../Header/Header.js';
import { Row } from '../Row/Row';
import { Addition } from '../Addition/Addition';

export const Table = ({ rows, editRow, deleteRow, addRow }) => {
    return (
        <div>
            <div className="table">
                <Header/>
                {rows.map(item => <Row {...item} editRow={editRow} deleteRow={deleteRow}/>)}
                <Addition addRow={addRow}/>
            </div>
        </div>
    )
}