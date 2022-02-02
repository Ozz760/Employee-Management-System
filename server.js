const inquirer = require("inquirer");
const mysql = require("mysql2");
const console = require("console.table");
const fs = require("fs");

// Prompt to ask the user
// "What would you like to do?"
// Choices: [View All Employees, 
// Add Employee, Update Employee Role, View all Roles, Add Roles, 
// View all Departments, Add Departments]
