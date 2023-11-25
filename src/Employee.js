// Employee.js
import React, { useState } from "react";
import employeeData from "./EmployeeData";

const Employee = () => {
  const [employees, setEmployees] = useState(employeeData);

  const [editdata, setEditData] = useState({});

  const [editMode, setEditMode] = useState({});

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const toggleEditMode = ({ event, id }) => {
    console.log(editdata);

    let ind = employees.findIndex((val) => val.id === id);
    ind !== -1 && editMode[id]
      ? setEmployees((employees) => {
          let newVal = [
            ...employees,
            employees.splice(ind, 1, { id: id, ...editdata }),
          ];
          setEditData({});
          newVal.splice(-1);
          return newVal;
        })
      : setEmployees(employees);

    setEditMode((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee, ind) => (
            <tr key={employee.id}>
              <td>
                <input name="id" type="text" value={employee.id} disabled />
              </td>
              <td>
                {" "}
                <input
                  name="name"
                  type="text"
                  value={!editMode[employee.id] ? employee.name : editdata.name}
                  disabled={!editMode[employee.id]}
                  onChange={(e) => {
                    setEditData({
                      ...editdata,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="age"
                  value={!editMode[employee.id] ? employee.age : editdata.age}
                  disabled={!editMode[employee.id]}
                  onChange={(e) => {
                    setEditData({
                      ...editdata,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
              </td>

              <td>
                <button
                  onClick={(e) => {
                    toggleEditMode({ event: e, id: employee.id });
                  }}
                >
                  {editMode[employee.id] ? "Save" : "Edit"}
                </button>{" "}
              </td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
