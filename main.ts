import { FullTimeEmployee } from "./FullTimeEmployee";
import { ContractEmployee } from "./ContractEmployee";

// full time
const fullTime = new FullTimeEmployee();
fullTime.ssn = "123-456-789";
fullTime.lastName = "Johnson";
fullTime.firstName = "Alice";
fullTime.address = "12 Queen St, Fredericton, NB";
fullTime.rank = 3;
fullTime.age = 34;
fullTime.salary = 2000; 
fullTime.bonus = 500;
fullTime.overtimeHours = 25; 

// contract
const contract = new ContractEmployee();
contract.ssn = "987-654-321";
contract.lastName = "Smith";
contract.firstName = "Bob";
contract.address = "88 King St, Saint John, NB";
contract.rank = 2;
contract.age = 28;
contract.hours = 45; 
contract.hourlyRate = 30;

console.log("=== Saving valid employees ===");
if (fullTime.saveEmployee()) {
  console.log(fullTime.displayInformation());
  console.log();
}
if (contract.saveEmployee()) {
  console.log(contract.displayInformation());
  console.log();
}

// invalid
const invalid = new FullTimeEmployee();
invalid.ssn = "12-3456-789"; 
invalid.lastName = "Doe";
invalid.firstName = "Jane";
invalid.address = "1 Test Ave";
invalid.rank = 7; 
invalid.age = 15;
invalid.salary = 1500;
invalid.bonus = 100;
invalid.overtimeHours = 5;

console.log("=== Saving invalid employee ===");
if (invalid.saveEmployee()) {
  console.log(invalid.displayInformation());
}
