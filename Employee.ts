
export class Employee {
  public ssn: string;
  public lastName: string;
  public firstName: string;
  public address: string;
  public rank: number;
  public age: number;

  constructor(
    ssn: string = "",
    lastName: string = "",
    firstName: string = "",
    address: string = "",
    rank: number = 0,
    age: number = 0
  ) {
    this.ssn = ssn;
    this.lastName = lastName;
    this.firstName = firstName;
    this.address = address;
    this.rank = rank;
    this.age = age;
  }

  protected validateAge(): boolean {
    if (this.age >= 16) {
      return true;
    }
    console.log(
      `Validation failed: age must be 16 or older (received ${this.age}).`
    );
    return false;
  }

  /* Rank must be between 1 and 5, inclusive. */
  protected validateRank(): boolean {
    if (this.rank >= 1 && this.rank <= 5) {
      return true;
    }
    console.log(
      `Validation failed: rank must be between 1 and 5 (received ${this.rank}).`
    );
    return false;
  }

  protected validateSSN(): boolean {
    const ssnPattern = /^\d{3}-\d{3}-\d{3}$/;
    if (ssnPattern.test(this.ssn)) {
      return true;
    }
    console.log(
      `Validation failed: SSN must match ###-###-### (received "${this.ssn}").`
    );
    return false;
  }

  protected validateAll(): boolean {
    const ageOk = this.validateAge();
    const rankOk = this.validateRank();
    const ssnOk = this.validateSSN();
    return ageOk && rankOk && ssnOk;
  }
}
