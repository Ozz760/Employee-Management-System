INSERT INTO department (id, department_name)
VALUES (1, "Engineering"),
       (2, "Legal"),
       (3. "Sales"), 
       (4, "Finance");

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Engineer", 100000, 1),
       (7, "Intern", 50000, 1)
       (8, "Lawyer", 200000, 2),
       (9, "Sales Person", 90000, 3),
       (10, "Financer", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)   
VALUES ("Chris", "Lee", 6, 11),
       ("John", "Foo", 7, 11)
       ("Ann", "Carter", 8, 12),
       ("David", "Smith", 9, 13),
       ("Max", "Keegan", 10, 14);