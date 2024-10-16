# Employee Management Dashboard

This project is a React-based Employee Management Dashboard, allowing the management of employees with basic CRUD operations like creating, viewing, updating, and deleting employee records. The dashboard includes features like search functionality, employee detail modal, pagination, and data management using an API.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Contributing](#contributing)

## Features
- **Add New Employee**: Add new employees using a modal form.
- **View Employee Details**: View detailed information of an employee in a modal.
- **Update Employee**: Update employee details via a form.
- **Delete Employee**: Delete an employee with a confirmation modal.
- **Search Functionality**: Search employees by name or position.
- **Pagination**: View employee data in paginated format.
- **Loading States**: Show loading animation during data fetch or processing.

## Technologies Used
- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: For designing responsive layouts.
- **React Icons**: For easy-to-use icons.
- **Axios**: For making HTTP requests to the API.
- **React Hooks**: Managing state, side effects, and data flow.
- **Employee API**: (Defined in a separate file) Provides the necessary endpoints to interact with employee data.

## Project Structure

```bash
├── src
│   ├── api
│   │   └── employeeAPI.js        # API for managing employee requests
│   ├── components
│   │   ├── Dashboard.js          # Main dashboard layout component
│   │   ├── EmployeeComponent.js   # Manages employee operations
│   │   ├── EmployeesTable.js      # Table to list employees with pagination
│   │   ├── EmployeeForm.js        # Form for adding new employees
│   │   ├── EmployeeDetailModal.js # Modal to view and update employee details
│   │   ├── SearchBar.js           # Search bar to filter employees
│   │   ├── LoadingSvg.js          # Loading SVG for async operations
│   │   ├── LoadingButtonSVG.js    # Loading SVG for buttons
│   │   ├── UpdateEmployeeForm.js  # Form to update employee information
│   ├── App.js                     # Main App component
│   └── index.js                   # Entry point of the app
```

## Components Overview

### Dashboard
The main component that sets up the employee dashboard. It renders the `EmployeeComponent` and defines the overall layout of the page.

### EmployeeComponent
The core component that integrates all subcomponents. It handles fetching employees, managing search queries, and displaying employee data. It controls the display of the employee table, forms, and modals.

### EmployeesTable
Displays employee data in a paginated table format. It uses a `currentPage` state to paginate through the employee list. Includes a button for viewing more employee details in a modal.

### EmployeeForm
A modal form used to add new employees. It validates phone numbers and handles API requests to add a new employee.

### EmployeeDetailModal
A modal to show detailed employee information. It also allows updating employee details and deleting an employee with a confirmation dialog.

### UpdateEmployeeForm
A form used inside the `EmployeeDetailModal` to update employee information. It is pre-filled with the current employee details.

### SearchBar
A search input component that filters employees by name or position.

### LoadingSvg & LoadingButtonSVG
Reusable loading indicators displayed during asynchronous operations, like data fetching and form submission.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/employee-management-dashboard.git
cd employee-management-dashboard
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

## Usage

### Adding a New Employee:
- Click on the Add Employee button to open a form modal.
- Fill in the required fields and submit.
- The new employee will be added and displayed in the table.
- Viewing Employee Details:
- In the employee table, click on the More Details button next to an employee to view their detailed profile.
- Updating Employee Details:
- In the detail modal, click the Update button to edit employee details.
- Submit the updated information to update the record.
- Deleting an Employee:
- In the detail modal, click the delete icon to open the delete confirmation modal.
- Confirm the deletion to remove the employee from the list.

### Searching Employees:  
- Use the search bar to filter employees by name or position.

### API Reference
- All employee data is managed through the API defined in the employeeAPI.js file.

- **fetchEmployees**: Fetch all employees from the server.
- **fetchEmployeeDetails**: Fetch details of a single employee.
- **addEmployees**: Add a new employee to the server.
- **updateEmployeeDetails**: Update an existing employee.
- **deleteEmployee**: Delete an employee from the server.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

