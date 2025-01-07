// Step 1: Define the Car class
class Car {
    constructor(brand, model, color, mileage) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.mileage = mileage;
    }
  
    // Getter method to return car properties
    get properties() {
      return `Car[brand=${this.brand.toUpperCase()}, model=${this.model}, color=${this.color}, mileage=${this.mileage}]`;
    }
  }
  
  // Step 2: Define the RacingCar class, inheriting from Car
  class RacingCar extends Car {
    constructor(brand, model, color, mileage) {
      super(brand, model, color, mileage); // Call the parent constructor
    }
  
    // Method to participate in the championship
    participateInChampionship(positionInChampionship) {
      if (positionInChampionship > 0) {
        console.log(`I won position ${positionInChampionship}`);
      } else {
        console.log("I didn't win any prize");
      }
    }
  }
  
  // Step 3: Define the main function to create and display instances
  function main() {
    // Create instances of Car
    const car1 = new Car("Volvo", "XC-60", "Black", "234,000");
    const car2 = new Car("Mazda", "CX-5", "Green", "111,000");
    const car3 = new Car("Dacia", "BIGGSTER", "Blue", "20,000");
  
    // Display the properties of each car
    console.log(car1.properties);
    console.log(car2.properties);
    console.log(car3.properties);
  
    // Create instances of RacingCar
    const racingCar1 = new RacingCar("Toyota", "Turbo", "Red", "100000");
    const racingCar2 = new RacingCar("Ferrari", "F1", "Blue", "50000");
  
    // Participate in the championship
    racingCar1.participateInChampionship(30); // Output: "I won position 30"
    racingCar2.participateInChampionship(-1); // Output: "I didn't win any prize"
  
    // Display the properties of the racing cars
    console.log(racingCar1.properties);
    console.log(racingCar2.properties);
  }
  
  // Call the main function
  main();
  