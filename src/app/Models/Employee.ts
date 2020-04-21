export class Employee
{
    id: number;
    employee_name: string;
    employee_salary: string;
    employee_age: number;
    profile_image: string;

    constructor(id, employee_name, employee_salary, employee_age, profile_image)
    {
        this.id = id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary;
        this.employee_age = employee_age;
        this.profile_image = profile_image;
    }
}