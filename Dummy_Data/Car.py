class Car:
    def __init__(self, make, model, year, color, mileage=0, fuel_type='Gasoline', fuel_capacity=50):
        """
        Initializes a new car instance.

        :param make: str - The manufacturer of the car (e.g., Toyota, Ford).
        :param model: str - The model of the car (e.g., Corolla, Mustang).
        :param year: int - The year the car was manufactured.
        :param color: str - The color of the car.
        :param mileage: int - The current mileage of the car (default is 0).
        :param fuel_type: str - The type of fuel the car uses (default is 'Gasoline').
        :param fuel_capacity: int - The maximum fuel capacity in liters (default is 50).
        """
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.mileage = mileage
        self.fuel_type = fuel_type
        self.fuel_capacity = fuel_capacity
        self.current_fuel = fuel_capacity  # Starts with a full tank

    def drive(self, distance):
        """
        Simulates driving the car a certain distance, reducing fuel accordingly.

        :param distance: int - The distance driven in kilometers.
        :raises ValueError: If the distance is negative.
        :raises RuntimeError: If there is not enough fuel to drive the distance.
        """
        if distance < 0:
            raise ValueError("Distance cannot be negative.")
        
        fuel_needed = distance / 10  # Assume 10 km/l fuel efficiency
        
        if fuel_needed > self.current_fuel:
            raise RuntimeError("Not enough fuel to drive this distance.")
        
        self.mileage += distance
        self.current_fuel -= fuel_needed
        print(f"Driven {distance} km. Current mileage: {self.mileage} km.")

    def refuel(self, liters):
        """
        Refuels the car.

        :param liters: int - The amount of fuel to add in liters.
        :raises ValueError: If liters is negative or results in exceeding the fuel capacity.
        """
        if liters < 0:
            raise ValueError("Cannot refuel negative amount.")
        
        if self.current_fuel + liters > self.fuel_capacity:
            raise ValueError("Fuel capacity exceeded.")
        
        self.current_fuel += liters
        print(f"Refueled {liters} liters. Current fuel: {self.current_fuel} liters.")

    def display_details(self):
        """
        Displays the details of the car.
        """
        details = (
            f"Car Details:\n"
            f"Make: {self.make}\n"
            f"Model: {self.model}\n"
            f"Year: {self.year}\n"
            f"Color: {self.color}\n"
            f"Mileage: {self.mileage} km\n"
            f"Fuel Type: {self.fuel_type}\n"
            f"Fuel Capacity: {self.fuel_capacity} liters\n"
            f"Current Fuel: {self.current_fuel} liters\n"
        )
        print(details)

# Example Usage
if __name__ == "__main__":
    my_car = Car(make="Toyota", model="Corolla", year=2020, color="Blue")
    my_car.display_details()
    my_car.drive(50)
    my_car.refuel(20)
    my_car.drive(30)

