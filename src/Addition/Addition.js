import React, { useState } from 'react';
import {Form} from '../Form/Form';

export function Addition({ addRow }) {
    const [visible,setVisible] = useState(false);

    function handleVisible() {
        setVisible(true)
    }
    function handleSubmit(values) {
        addRow(values);
        setVisible(false);
    }
    function handleCancel() {
        setVisible(false);
    }
    return (
        <div>
            {visible ? <Form onSubmit={handleSubmit} onCancel={handleCancel}/> : 
            <button onClick={handleVisible} className="btn btn-outline-primary mt-3">+</button>}
        </div>
    )
}
