import React, { useState } from "react";
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export  function Form({ initialValues = {}, onSubmit, onCancel, }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const { value, name } = event.target;
    setValues((prevValues) => ({
        ...prevValues,
        [name]: value
    }));
  }
  function handleCheckboxChange(event) {
    const { checked, name } = event.target;
    setValues((prevValues) => ({
        ...prevValues,
        [name]: checked
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(values)
  }
  return (
    <form onSubmit={handleSubmit} className="form" onReset={onCancel}>
      <div>
        <input 
        type="text" 
        name="company" 
        onChange={handleChange} value={values.company}  
        className="form__company"
        placeholder="company"
        />
      </div>
      <div>
        <input 
        type="text" 
        name="adress" 
        onChange={handleChange} 
        value={values.adress} 
        className="form__adress ml-3"
        placeholder="type adress"
        />
      </div>
      <div>
        <input 
        type="text" 
        name="owner" 
        onChange={handleChange} 
        value={values.owner} 
        className="form__owner ml-3"
        placeholder="type owner"
        />
      </div>
      <div>
        <input 
        type="text" 
        name="type" 
        onChange={handleChange} 
        value={values.type} 
        className="form__type ml-3"
        placeholder="activity"
        />
      </div>
      <div>
        <input 
        type="checkbox" 
        name="active" 
        onChange={handleCheckboxChange} 
        checked={values.active} 
        className="form__active ml-3"/>
      </div>
      <div className="buttonsContainer">
        <button type='submit' className="from__saveButton btn btn-success">Save</button>
        <button type='reset' className="from__saveButton btn btn-danger ml-3 mt-3">Cancel</button>
      </div>
    </form>
  );
}
