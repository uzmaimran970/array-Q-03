"use strict";
// part#03 employee salaries
// challenge:
// you are managing emplyee salaries for a company .implement logic to calculate salaries and handle bonus 
// 1. define a type alias named employee with the following properties:
// name:(string): yhe name of employees
// hourswoeked(number)the number of hours the employee worked 
// hourly rate (number): the hourly rate of employee 
// salary (number): the bade salary of employee 
// 2.define an array named employees containing employee objects. each employee object should include a name hours worked , hourly rate 
// and calculateSalary,
// impliment a function named calculate salary that calculate the salary of each employee based on the hours worked and hourly rate 
// if an employee worked 20 hours or more apply a 10%bonus to their salary
// Array containing employee objects
const employees = [{
        name: "uzma",
        hourlyRate: 80,
        hoursworked: 25,
        salary: 0
    },
    {
        name: "Ramsha",
        hourlyRate: 90,
        hoursworked: 18,
        salary: 0
    },
    {
        name: "Mahi",
        hourlyRate: 70,
        hoursworked: 20,
        salary: 0
    }
];
// Function to calculate salary
function calculateSalary(employees) {
    for (let employee of employees) {
        // Calculate base salary
        employee.salary = employee.hoursworked * employee.hourlyRate;
        // Apply bonus if hours worked are 20 or more
        if (employee.hoursworked >= 20) {
            employee.salary *= 1.1; // Apply 10% bonus
        }
    }
}
// Call the function to calculate salaries
calculateSalary(employees);
//    Output the results
console.log("Employee Salaries:");
for (let employee of employees) {
    console.log(`${employee.name}: ${employee.salary.toFixed(2)}.`);
}
