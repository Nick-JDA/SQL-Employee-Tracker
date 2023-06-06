const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'HuM4N4Ft3R4Ll!',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

function askQuestion() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'option',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role'
                ]
            },
        ])
        .then((response) => {
            if (response.option == 'View all departments') {
                viewAllDepartments(); 
            } else if (response.option == 'View all roles') {
                viewAllRoles();
            } else if (response.option == 'View all employees') {
                viewAllEmployees();
            } else if (response == 'Add a department') {
                addDepartment();
            } else if (response == 'Add a role') {
                addRole();
            } else if (response == 'Add an employee') {
                addEmployee();
            } else if (response == 'Update an employee role') {
                updateEmployeeRole();
            }
        })
};
askQuestion();

//view all departments
viewAllDepartments = () => {
    db.query(`SELECT id as "Dept ID", dept_name as "Dept Name" FROM department`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
};

//view all roles
viewAllRoles = () => {
    db.query(`SELECT r.id as "Role ID", r.title as "Job Title", r.salary, dept_name as Dept FROM role as r JOIN department ON r.department_id = department.id`, (err,result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
};

//view all employees
viewAllEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
};
