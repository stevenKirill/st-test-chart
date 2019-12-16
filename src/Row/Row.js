import React, { useState } from 'react';
import './Row.css';
import { Form } from '../Form/Form';

export const Row = (props) => {
    const {editRow, deleteRow, ...values}  = props
    const { company, adress, active, owner, type, id } = values;
    const [edit,setEdit] = useState(false);

    function handleEditView() {
        setEdit(true)
    }
    function handleDelete() {
        deleteRow(id)
    }
    function handleEditRow(values) {
        editRow(values)
        setEdit(false)
    }
    function handleCancel() {
        setEdit(false);
    }
    if(edit) {
        return <Form initialValues={values} onSubmit={handleEditRow} onCancel={handleCancel}/>
    }

    return (
        <div className='row'>
            <div className='row__company'>{company}</div>
            <div className='row__adress'>{adress}</div>
            <div className='row__owner'>{owner}</div>
            <div className='row__type'>{type}</div>
            <div className='row__active'><input type='checkbox' checked={active} disabled/></div>
            <div className='row__buttonsContainer'>
                <button type='button' className="row__buttonEdit btn btn-primary" onClick={handleEditView}>Edit</button>
                <button type='button' className="row__buttonDelete btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
        
    )
}