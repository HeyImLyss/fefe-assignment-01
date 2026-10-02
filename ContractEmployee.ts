import { Employee } from "./Employee";
import { IEmployee } from "./IEmployee";

export class ContractEmployee extends Employee implements IEmployee {
  public hours: number = 0;
  public hourlyRate: number = 0;

  public calculateCompensation(): number {
    const regularHours = Math.min(this.hours, 40);
    const overtimeHours = Math.max(0, this.hours - 40);
    return (
      regularHours * this.hourlyRate + overtimeHours * this.hourlyRate * 1.5
    );
  }

  public saveEmployee(): boolean {
    if (!this.validateAll()) {
      console.log(
        `Contract employee "${this.firstName} ${this.lastName}" was NOT saved.\n`
      );
      return false;
    }
    console.log(
      `Contract employee "${this.firstName} ${this.lastName}" saved successfully.`
    );
    return true;
  }

  public displayInformation(): string {
    return [
      "--- Contract Employee ---",
      `Name:          ${this.firstName} ${this.lastName}`,
      `SSN:           ${this.ssn}`,
      `Address:       ${this.address}`,
      `Age:           ${this.age}`,
      `Rank:          ${this.rank}`,
      `Hours:         ${this.hours}`,
      `Hourly Rate:   $${this.hourlyRate.toFixed(2)}`,
      `Compensation:  $${this.calculateCompensation().toFixed(2)}`,
    ].join("\n");
  }
}
