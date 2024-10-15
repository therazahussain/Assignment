import axios from "axios";

function EmployeesApis() {
  const API_URL = "https://hono-backend-dl95.onrender.com";

  const fetchEmployees = async (setEmployees, setLoadingEmployees) => {
    try {
      const apiResponse = await axios.get(`${API_URL}/employees`);
      console.log(apiResponse);
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


  const addEmployees = async (data, setLoadingButton) => {
    try {
      const apiResponse = await axios.get(`${API_URL}/employees`);
      console.log(apiResponse);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        // General error
        console.error("Unexpected error:", error);
      }
    }
  };

  return { fetchEmployees, addEmployees };
}

export default EmployeesApis;
