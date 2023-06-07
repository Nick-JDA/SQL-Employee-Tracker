INSERT INTO department (dept_name)
VALUES ("Human Resources"),
("Finance"),
("Marketing"),
("Production");



INSERT INTO role (title, salary, department_id)
VALUES ("Employment manager", 4500.00, 1),
("Recruiter", 3500.00, 1),
("CFO", 4500.00, 2),
("Accountant", 3500.00, 2),
("Director of marketing", 4500.00, 3),
("Marketing coordinator", 3500.00, 3),
("Unit Production manager", 4500.00, 4),
("Production assistant", 3500.00, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joey", "Yeoj", 1, null),
("Jake", "Ekaj", 2, 1),
("Jen", "Nej", 3, null),
("Jack", "Kcaj", 4, 3),
("Jeff", "Ffej", 5, null),
("Jasmine", "Enimsaj", 6, 5),
("Javier", "Reivaj", 7, null),
("Jeorge", "Egroej", 8, 7);
