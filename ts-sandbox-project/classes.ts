class Vehicle {
  // Instatnly executed when we create a new instance of the class
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');

console.log(vehicle.color);

// class Car2 extends Vehicle {
//   // overriding vehicle function
//   private drive(): void {
//     console.log('kachow');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car3 = new Car2();
// car3.startDrivingProcess();
