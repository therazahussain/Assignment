import React, { useState, useEffect } from 'react';
import LoadingButtonSVG from './LoadingButtonSVG';
import EmployeesApis from '../api/employeeAPI';

const UpdateEmployeeForm = ({ id, employee, setEmployees, setIsUpdating, setLoadingEmployees, setEmployee,
  setLoadingData }) => {
  const {updateEmployeeDetails} = EmployeesApis();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  // Pre-fill the form with the employee's current details when the component mounts
  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setPosition(employee.position);
      setDepartment(employee.department);
      setEmail(employee.email);
      setPhoneNumber(employee.phone);
    }
  }, [employee]);

  const handleSubmit = (e) => {
    setLoadingButton(true);
    e.preventDefault();
    const data = {
      ...employee,
      name,
      position,
      department,
      email,
      phone: phoneNumber,
    };
    updateEmployeeDetails(id, data, setLoadingButton, setEmployees, setIsUpdating, setLoadingEmployees, setEmployee,
      setLoadingData)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white border rounded-lg shadow-lg p-4 w-96">
        <h3 className="text-lg font-bold mb-4">Update Employee Details</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="button"
            className=" border-[1.5px] border-black px-2 py-1 rounded bg-black text-white transition"
            onClick={handleSubmit}
            disabled={loadingButton}
          >
            {loadingButton ? <LoadingButtonSVG /> : "Update Employee"}
          </button>
          <button
            type="button"
            onClick={()=> setIsUpdating(false)}
            className="bg-white text-red-500 border-[1.5px] border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition"
            disabled={loadingButton}
         >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployeeForm;
