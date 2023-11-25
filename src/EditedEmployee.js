import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditEmployee = ({ employees, setEmployees }) => {
  const { id } = useParams();
  const history = useHistory();

  const [editedEmployee, setEditedEmployee] = useState({   
    id: '',
    name: '',
    age: '',
  });

  useEffect(() => {
    // Find the employee with the specified id
    const employeeToEdit = employees.find((employee) => employee.id === parseInt(id));
    setEditedEmployee(employeeToEdit);
  }, [employees, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Update the employees array with the edited employee
    const updatedEmployees = employees.map((employee) =>
      employee.id === editedEmployee.id ? editedEmployee : employee
    );

    setEmployees(updatedEmployees);
    history.push('/employee'); // Redirect to the employee list after editing
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={editedEmployee.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={editedEmployee.age} onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
