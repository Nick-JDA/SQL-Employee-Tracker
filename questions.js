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
            } else if (response.option == 'Add a department') {
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
    db.query(`SELECT r.id as "Role ID", r.title as "Job Title", r.salary, dept_name as Dept FROM role as r JOIN department ON r.department_id = department.id`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
};

//view all employees
viewAllEmployees = () => {
    db.query(`SELECT e.id as "Employee ID", e.first_name as First, e.last_name as Last, e.role_id as "Role ID", e.manager_id as "Manager ID", CONCAT(m.first_name, " ", m.last_name) as Manager, role.title as Title, department.dept_name as Department, role.salary as Salary FROM employee as e JOIN role ON e.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee as m ON e.manager_id = m.id`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    });
};

//add new department
addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What Department would you like to add?',
            },
        ])
        //.then(response)
        .then(function (response) {
            db.query(`INSERT INTO department (dept_name) VALUES ("${response.department}")`), (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }

            }
        })
        .then(function () {
            viewAllDepartments();
        })
}

//add new role
addRole = () => {
    db.query(), (err, result) => {

    }
}

//update employee role
updateEmployeeRole = () => {
    db.query(), (err, result) => {

    }
}
