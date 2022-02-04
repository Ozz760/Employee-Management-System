const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleDt = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

function beginPrompt() {
    inquirer
      .prompt({
        type: "list",
        name: "beginPrompt",
        message: "Select an option",
        choices: [
          "View All Employees",
          "Add Employee",
          'Update Employee Job',
          'View all roles',
          'Add role',
          "View all Departments",
          'Add Departments',
          "Quit"
        ],
      })
      .then((answers) => {
        switch (answers.beginPrompt) {
          case 'View All Employees':
            viewAllEmployees();
            break;
          case 'Add Employee':
            addEmployee();
            break;
          case 'Update Employee Role':
            updateEmployee();
            break;
          case 'View All Roles':
            viewRoles();
            break;
          case 'View All Departments':
            viewAllDepartments();
            break;
          case 'Add Role':
            addRole();
            break;
          case 'Add Departments':
            addDepartment();
          case 'Quit':
            quit(); 
        }
      });
  };
  

  const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
      if (err) {
        throw err
      } else {
        console.table(res)
      }
      beginPrompt();
    })
  };
  
 
  const viewAllEmployees = () => {
    db.query('SELECT first_name, last_name FROM employee', (err, res) => {
      if (err) {
        throw err
      } else {
        console.table(res)
      }
      beginPrompt();
    })
  };
  

  const viewRoles = () => {
    db.query('SELECT title FROM role', (err, res) => {
      if (err) {
        throw err
      } else {
        console.table(res)
      }
      beginPrompt();
    })
  };
  

  const addEmployee = () => {
    inquirer
      .prompt([{
          type: "input",
          name: "firstName",
          message: "Enter first name",
        },
        {
          type: "input",
          name: "lastName",
          message: "Enter last name",
        },
        {
          type: "input",
          name: "newRoleId",
          message: "Enter job ID",
        },
        {
          type: "input",
          name: "newManId",
          message: "Enter manager ID",
        }
      ])
      .then((answers) => {
        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) values ('${answers.firstName}', '${answers.lastName}', '${answers.newRoleId}', '${answers.newManId}')`, (err, res) => {
          if (err) {
            throw err
          } else {
            console.table(res)
          }
          beginPrompt();
        });
      });
  };
  

  const addDepartment = () => {
    inquirer
      .prompt([{
        type: "input",
        name: "newDepartment",
        message: "Enter department ID",
      }])
      .then((answers) => {
        db.query(`INSERT INTO department(name) values ('${answers.newDepartment}')`, (err, res) => {
          if (err) {
            throw err
          } else {
            console.table(res)
          }
          beginPrompt();
        });
      });
  };
  
  
  const addRole = () => {
    inquirer
      .prompt([{
          type: "input",
          name: "newRole",
          message: "Enter title",
        },
        {
          type: "input",
          name: "newSalary",
          message: "Enter salary",
        },
        {
          type: "input",
          name: "newDepId",
          message: "Enter Department ID",
        }
      ])
      .then((answers) => {
        db.query(`INSERT INTO role(title, salary, department_id) values ('${answers.newRole}', '${answers.newSalary}', '${answers.newDepId}')`, (err, res) => {
          if (err) {
            throw err
          } else {
            console.table(res)
          }
          beginPrompt();
        });
      });
  };
  

  const updateEmployee = () => {
    db.query('SELECT * from employee', (err, res) => {
      if (err) {
        throw err
      } else {
        console.table(res)
      }
      inquirer
        .prompt([{
            type: "input",
            name: "employeeTarget",
            message: "Enter employee ID to make changes",
          },
          {
            type: "input",
            name: "newRoleId",
            message: "Enter new job ID",
          },
        ])
        .then((answers) => {
          db.query(`UPDATE employee SET role_id = ${answers.newRoleId} WHERE id = ${answers.employeeTarget}`);
          if (err) {
            throw err
          } else {
          }
          beginPrompt();
        });
    })
  };

  const quit = () => { 
    process.exit(); 
  };
  
  beginPrompt();