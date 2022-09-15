let employees = [];
const printEmployeeForm = employees

function Employee(name, title, salary) {//formal arguments
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.status = "Full Time";
}
Employee.prototype.printEmployeeForm = function(){
  console.log(this.name + ' \n' + this.title + '\n' + this.salary + '\n' + this.status)
}
var emp1 = new Employee('Abraham Lincoln' , 'Stand Up Comedian', 50.00 + '/n per joke about Frederick Douglas')
var emp2 = new Employee('Thomas Jefferson' , "Nickel Model" , .05 + 'cents' )
var emp3 = new Employee('Woodrow Wilson' , "Political Scientist" , 55000)
emp2.status = 'Contract'
emp3.status = 'Part Time'

 

emp1.printEmployeeForm()
emp2.printEmployeeForm()
emp3.printEmployeeForm()
employees.push(emp1 , emp2, emp3)
console.log(employees)

