const inquirer = require("inquirer");
const mysql = require("mysql2");
const console = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

const beginPrompt = () => {
  inquirer
    .prompt({
      type: "list",
      name: "opener",
      message: "What would you like to do?",
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
    })
    .then((answer) => {
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

const viewAllEmployees = () => {
  db.query(`SELECT first_name, last_name FROM employee`, (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res);
    }
    beginPrompt();
  });
};

const viewRoles = () => {
  db.query(`SELECT title FROM role`, (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res);
    }
    beginPrompt();
  });
};

const viewAllDepartments = () => {
  db.query(`SELECT * FROM department`, (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res);
    }
    beginPrompt();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
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
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO employee(first_name, last_name, job_id, manager_id) values ('${answers.firstName}', '${answers.lastName}', '${answers.newRoleId}', '${answers.newManId}')`
      ),
        (err, res) => {
          if (err) {
            throw err;
          } else {
            console.table(res);
          }
          beginPrompt();
        };
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
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
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO roles(title, salary, department_id) values ('${answers.newRole}', '${answers.newSalary}', '${answers.newDepId}')`
      ),
        (err, res) => {
          if (err) {
            throw err;
          } else {
            console.table(res);
          }
          beginPrompt();
        };
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "newDepartment",
        message: "Enter department",
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department(name) values ('${answers.newDepartment}')`
      ),
        (err, res) => {
          if (err) {
            throw err;
          } else {
            console.table(res);
          }
          beginPrompt();
        };
    });
};

const updateEmployeesRole = () => {
  db.query("SELECT * from employee", (err, res) => {
    if (err) {
      throw err;
    } else {
      console.table(res);
    }
    inquirer
      .prompt([
        {
          type: "input",
          name: "employeeTarget",
          message: "Enter employee ID to make changes",
        },
        {
          type: "input",
          name: "newJobId",
          message: "Enter new job ID",
        },
      ])
      .then((answers) => {
        db.query(
          `UPDATE employee SET job_id = ${answers.newJobId} WHERE id = ${answers.employeeTarget}`
        ),
          (err, res) => {
            if (err) {
              throw err;
            } else {
            }
            beginPrompt();
          };
      });
  });
};

beginPrompt();