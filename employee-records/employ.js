let employees = [];
const printEmployeeForm = employees

function Employees(name, title, salary, status) {//formal arguments
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.status = status;
  
Employees.prototype.status = function(){
  console.log(this.status)
}
function printEmployeeForm(employees){[
    this.employee1 = {name:"Thomas Jefferson",title: "Money Model" ,salary:"$" + 20 ,status: "Full-time"},
    this.employee2 = {name:'George Washington' ,title:'Cherry Tree Chopper',salary: 7 + 'stacks of wood',status: 'Contract'},
    this.employee3 = {name:"Benjamin Franklin" ,  title:"Scientist", salary: 40, status: 'Part-time'}]
    employees = [this.employee1,this.employee2,this.employee3];
    printEmployeeForm(employees)

 
}
printEmployeeForm()

}