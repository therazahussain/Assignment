import React, { useState } from 'react';

const EmployeeForm = ({ onAddEmployee, onClose }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone number length
    if (phoneNumber.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    const newEmployee = {
      name,
      position,
      department,
      email,
      phoneNumber,
    };
    onAddEmployee(newEmployee);
    setName('');
    setPosition('');
    setDepartment('');
    setEmail('');
    setPhoneNumber('');
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white border rounded-lg shadow-lg p-4 w-96">
        <h3 className="text-lg font-bold mb-4">Add Employee</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => {
              // Allow only numbers and restrict length to 10
              const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
              setPhoneNumber(value);
            }}
            required
            className="border p-2 rounded"
            maxLength="10"
          />
          <button
            type="submit"
            className="mt-4 bg-black text-white p-2 rounded border-[1.5px] border-black hover:bg-white hover:border-black hover:border-[1.5px] hover:text-black transition"
          >
            Add Employee
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 text-red-500 hover:underline"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
