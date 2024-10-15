import React, { useEffect, useState } from "react";
import UpdateEmployeeForm from "./UpdateEmployeeForm";
import { MdDelete } from "react-icons/md";
import LoadingSvg from "./LoadingSvg";
import EmployeesApis from "../api/employeeAPI";
import LoadingButtonSVG from "./LoadingButtonSVG";

const EmployeeDetailModal = ({
  id,
  onClose,
  onUpdate,
  onDelete,
  setEmployees,
  setLoadingEmployees
}) => {
  const { fetchEmployeeDetails, deleteEmployee } = EmployeesApis();
  const [isUpdating, setIsUpdating] = useState(false); // State to track if we are updating
  const [isDeleting, setIsDeleting] = useState(false); // State to track delete confirmation modal
  const [loadingData, setLoadingData] = useState(true);
  const [employee, setEmployee] = useState(null);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    if (id) {
      fetchEmployeeDetails(id, setLoadingData, setEmployee);
    }
  }, []);

  const handleDeleteEmployee = () => {
    deleteEmployee(id, setLoadingButton, setEmployees, setIsDeleting, onClose, setLoadingEmployees);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white border rounded-lg shadow-lg p-4 w-96 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Employee Details</h3>{" "}
          <MdDelete
            style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
            onClick={() => setIsDeleting(true)} // Show delete confirmation modal
          />
        </div>
        {loadingData ? (
          <div className="w-full h-64 flex items-center justify-center">
            <LoadingSvg />
          </div>
        ) : (
         
          employee === null ? 
          <strong>No details Found</strong>
          :  <>
          <div className="flex flex-col gap-3">
            <div className="w-full flex">
              <strong className="w-[35%]">Name:</strong>{" "}
              <p className="w-[70%]">{employee?.name}</p>
            </div>
            <div className="w-full flex">
              <strong className="w-[35%]">Position:</strong>{" "}
              <p className="w-[70%]">{employee?.position}</p>
            </div>
            <div className="w-full flex">
              <strong className="w-[35%]">Department:</strong>{" "}
              <p className="w-[70%]">{employee?.department}</p>
            </div>
            <div className="w-full flex">
              <strong className="w-[35%]">Email:</strong>{" "}
              <p className="w-[70%]">{employee?.email}</p>
            </div>
            <div className="w-full flex">
              <strong className="w-[35%]">Phone Number:</strong>{" "}
              <p className="w-[70%]">{employee?.phone}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setIsUpdating(true)} // Show update form
              className="bg-white text-black border-[1.5px] border-black px-2 py-1 rounded hover:bg-black hover:text-white transition"
            >
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-red-500 border-[1.5px] border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition"
            >
              Close
            </button>
          </div>
        </>
         
        )}
        {isUpdating && (
          <UpdateEmployeeForm
            employee={employee}
            id={id}
            setEmployees={setEmployees}
            setIsUpdating={setIsUpdating} // Close the update form
            setLoadingEmployees={setLoadingEmployees}
            setEmployee={setEmployee}
            setLoadingData = {setLoadingData}
          />
        )}

        {/* Delete Confirmation Modal */}
        {isDeleting && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white border rounded-lg shadow-lg p-6 w-80 text-center">
              <p className="text-lg font-bold mb-4">Confirm Deletion</p>
              <p>Are you sure you want to delete {employee?.name}?</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-white border-[1.5px] text-black border-black px-4 py-2 rounded hover:bg-black hover:text-white"
                  onClick={() => setIsDeleting(false)} // Cancel deletion
                  disabled={loadingButton}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => {
                    handleDeleteEmployee();
                  }}
                  disabled={loadingButton}
                >
                  {loadingButton ? <LoadingButtonSVG />:"Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetailModal;
