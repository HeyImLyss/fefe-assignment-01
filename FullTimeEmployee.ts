import { Employee } from "./Employee";
import { IEmployee } from "./IEmployee";

export class FullTimeEmployee extends Employee implements IEmployee {
  public salary: number = 0; 
  public bonus: number = 0;
  public overtimeHours: number = 0;

  private calculateSalary(): number {
    return this.salary + this.bonus;
  }

  private calculateOvertimePay(): number {
    const hourlyRate = this.salary / 40;
    let remaining = Math.max(0, this.overtimeHours);
    let pay = 0;

    // Each tier: 
    const tiers: [number, number][] = [
      [10, 1.25], // hours 1-10
      [10, 1.5], // hours 11-20
      [10, 1.75], // hours 21-30
    ];
    //Looked up how to do this. Kinda seems more complicated than needed? But works

    for (const [tierHours, multiplier] of tiers) {
      const hoursInTier = Math.min(remaining, tierHours);
      pay += hoursInTier * hourlyRate * multiplier;
      remaining -= hoursInTier;
    }

    // Hours beyond 30: (Salary / 40) x OT Hrs x 2
    pay += remaining * hourlyRate * 2;

    return pay;
  }

  public calculateCompensation(): number {
    return this.calculateSalary() + this.calculateOvertimePay();
  }

  public saveEmployee(): boolean {
    if (!this.validateAll()) {
      console.log(
        `Full-time employee "${this.firstName} ${this.lastName}" was NOT saved.\n`
      );
      return false;
    }
    console.log(
      `Full-time employee "${this.firstName} ${this.lastName}" saved successfully.`
    );
    return true;
  }

  public displayInformation(): string {
    return [
      "--- Full Time Employee ---",
      `Name:          ${this.firstName} ${this.lastName}`,
      `SSN:           ${this.ssn}`,
      `Address:       ${this.address}`,
      `Age:           ${this.age}`,
      `Rank:          ${this.rank}`,
      `Salary:        $${this.salary.toFixed(2)}`,
      `Bonus:         $${this.bonus.toFixed(2)}`,
      `Overtime Hrs:  ${this.overtimeHours}`,
      `Compensation:  $${this.calculateCompensation().toFixed(2)}`,
    ].join("\n");
  }
}
