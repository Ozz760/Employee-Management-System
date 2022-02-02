INSERT INTO department (id, department_name)
VALUES (1, "Engineering"),
       (2, "Legal"),
       (3. "Sales"), 
       (4, "Finance");

INSERT INTO role (id, title, salary, department)
VALUES (1, "Engineer", 100000, 1)
       (2, "Lawyer", 200000, 2)
       (3, "Sales Person", 90000, 3)
       (4, "Financer", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)   
VALUES ("Chris", "Lee", 2, 5)
       ("Ann", "Carter", 1, 6)
       ("David", "Smith", 3, 7)
       ("Max", "Keegan", 4, 8);