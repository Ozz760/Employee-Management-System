INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Legal"),
       (3, "Sales"), 
       (4, "Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 200000, 1),
       ("Junior Engieer", 100000, 1),
       ("Lawyer", 200000, 2),
       ("Junior Lawyer", 50000, 2),
       ("Sales Lead", 120000, 3),
       ("Sales Person", 90000, 3),
       ("Lead Accountant", 250000, 4), 
       ("Accountant", 100000, 4); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)   
VALUES ("Chris", "Lee", 1, null),
       ("John", "Foo", 2, 1),
       ("Ann", "Carter", 3, null),
       ("David", "Smith", 4, 3),
       ("Max", "Keegan", 5, null), 
       ("Jack", "Hanma", 6, 5), 
       ("Baki", "Hanma", 7, null), 
       ("Bill", "Smith", 8, 7); 
       