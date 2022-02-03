INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Legal"),
       ("Sales"), 
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 100000, 1),
       ("Intern", 50000, 2),
       ("Lawyer", 200000, 3),
       ("Sales Person", 90000, 4),
       ("Financer", 100000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)   
VALUES (1, "Chris", "Lee", 6, 11),
       (2, "John", "Foo", 7, 11),
       (3, "Ann", "Carter", 8, 12),
       (4, "David", "Smith", 9, 13),
       (5, "Max", "Keegan", 10, 14);
       