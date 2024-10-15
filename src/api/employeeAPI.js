import axios from "axios";

function EmployeesApis() {
  const API_URL = "https://hono-backend-dl95.onrender.com";

  const fetchEmployees = async (setEmployees, setLoadingEmployees) => {
    try {
      const apiResponse = await axios.get(`${API_URL}/employees`);
      setEmployees(apiResponse.data);
      setLoadingEmployees(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        // General error
        console.error("Unexpected error:", error);
      }
      setEmployees([]);
      setLoadingEmployees(false);
    }
  };

  const addEmployees = async (data, setLoading, setError, setEmployees) => {
    try {
      setLoading(true); // Start loading
      const apiResponse = await axios({
        method: "POST",
        baseURL: API_URL,
        url: "/employees",
        data,
      });

      // Assuming 'newEmployee' is the object you want to add
      setEmployees((prevEmployees) => [...prevEmployees, apiResponse.data]);

      setLoading(false); // Stop loading
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        // General error
        console.error("Unexpected error:", error);
      }
      setLoading(false);
      setError(true);
    }
  };

  const fetchEmployeeDetails = async (id, setLoadingData, setEmployee) => {
    try {
      const apiResponse = await axios.get(`${API_URL}/employees/${id}`);
      setEmployee(apiResponse.data);
      setLoadingData(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        // General error
        console.error("Unexpected error:", error);
      }
      setLoadingData(false);
      setEmployee(null);
    }
  };

  const deleteEmployee = async (
    id,
    setLoadingButton,
    setEmployees,
    setIsDeleting,
    onClose,
    setLoadingEmployees
  ) => {
    try {
      setLoadingButton(true); // Start loading
      const apiResponse = await axios({
        method: "DELETE",
        baseURL: API_URL,
        url: `/employees/${id}`,
      });

      // Assuming 'newEmployee' is the object you want to add

      setLoadingButton(false); // Stop loading
      setIsDeleting(false);
      onClose();
      setLoadingEmployees(true);
      setTimeout(() => {
        fetchEmployees(setEmployees, setLoadingEmployees);
      }, [1000]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        // General error
        console.error("Unexpected error:", error);
      }
      setLoadingButton(false);
    }
  };

  const updateEmployeeDetails = async (
    id,
    data,
    setLoadingButton,
    setEmployees,
    setIsUpdating,
    setLoadingEmployees,
    setEmployee,
    setLoadingData
  ) => {
    try {
      setLoadingButton(true); // Start loading
      const apiResponse = await axios({
        method: "PUT",
        baseURL: API_URL,
        url: `/employees/${id}`,
        data,
      });

      // Assuming 'newEmployee' is the object you want to add

      setLoadingButton(false); // Stop loading
      setLoadingData(true);

      setLoadingEmployees(true);
      setTimeout(() => {
        setIsUpdating(false);
        setEmployee(apiResponse.data);
        setLoadingData(false);
        fetchEmployees(setEmployees, setLoadingEmployees);
      }, [1000]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        // General error
        console.error("Unexpected error:", error);
      }
      setLoadingData(false);
      setLoadingButton(false);
    }
  };

  return {
    fetchEmployees,
    addEmployees,
    fetchEmployeeDetails,
    deleteEmployee,
    updateEmployeeDetails,
  };
}

export default EmployeesApis;
