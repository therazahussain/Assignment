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

  const addEmployees = async (
    data,
    setLoading,
    setError,
    setEmployees
  ) => {
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

  return { fetchEmployees, addEmployees };
}

export default EmployeesApis;
