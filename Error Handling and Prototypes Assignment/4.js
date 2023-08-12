// 4. Employee Class Challenge.
// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.
class Employee{
    constructor(company,model,year){
        this.name=company
        this.position=model
        this.salary=year
    }
    getSalary(){
        return this.salary;
    }
}
const employee1 = new Employee("John Doe", "Manager", 80000);
console.log(employee1.getSalary());