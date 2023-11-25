// Employee.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import employeeData from './EmployeeData';

const Employee = () => {
  const [employees, setEmployees] = useState(employeeData);
  console.log(employees);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
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
          {employees.map((employee) => (
            <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>
              <Link to={`/employee/edit/${employee.id}`}>Edit</Link> 
              </td>
              <td>
              <button onClick={() => handleDelete(employee.id)}>Delete</button>
            </td>
          </tr>
          ))};
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
