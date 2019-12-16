import React, { useState } from "react";
import "./App.css";
import { Table } from "./Table/Table";
import SearchingPanel from "./SearchingPanel/SearchingPanel";

const INITIAL_VALUES = [
  {
    company: "",
    adress: "",
    id: Date.now(),
    owner: "stev",
    type: "string",
    active: true
  }
];

function App() {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");

  const filteredRows = rows.filter(row => {
    const val = Object.values(row)
    .filter(value => typeof value === "string")
    .some(value => value.includes(search))
    return val;
  });

  function editRow(values) {
    setRows(prevRows =>
      prevRows.map(item => (item.id != values.id ? item : values))
    );
  }
  function deleteRow(id) {
    setRows(prevRows => prevRows.filter(item => item.id != id));
  }
  function addRow(values) {
    setRows(prevRows => [...prevRows, { ...values, id: Date.now() }]);
  }
  return (
    <div className="container">
      <SearchingPanel search={search} setSearch={setSearch} />
      <Table
        rows={filteredRows}
        editRow={editRow}
        deleteRow={deleteRow}
        addRow={addRow}
      />
    </div>
  );
}

export default App;
