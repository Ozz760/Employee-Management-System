const inquirer = require("inquirer");
const mysql = require("mysql2");
const console = require("console.table");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_db'
      }
);


const beginPrompt = () => { 
    inquirer 
        .prompt ({
            type: "list",
            name: "opener", 
            message: "What would yoy like to do?", 
            choices: [
                "View all employees", 
                "Add employees", 
                "Update employee role", 
                "View all roles", 
                "Add role", 
                "View all departments", 
                "Add department", 
                "Quit",
            ],
        }) .then ((answer) => {
            switch (answer.opener) {
                case "View all employees":
                    viewAllEmployees();
                    break; 
                case "Add employees":
                    addEmployee();
                    break; 
                case "Update employees role":
                    updateEmployeesRole(); 
                    break; 
                case "View all roles":
                    viewRoles();
                    break;
                case "Add role":
                    addRole(); 
                    break; 
                case "View all departments":
                    viewAllDepartments(); 
                    break; 
                case "Add department":
                    addDepartment(); 
                    break; 
                case "Quit":
                    quit(); 
                    break; 
                }
            });
        };
