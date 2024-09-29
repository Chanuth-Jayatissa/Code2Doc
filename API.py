import os
from groq import Groq

client = Groq(
    api_key=os.environ.get("GROQ_API")
)
completion = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[
        {
            "role": "user",
            "content": """
            class Car:
    def __init__(self, make, model, year, color, mileage=0, fuel_type='Gasoline', fuel_capacity=50):
        
        self.make = make
        self.model = model
        self.year = year
        self.color = color
        self.mileage = mileage
        self.fuel_type = fuel_type
        self.fuel_capacity = fuel_capacity
        self.current_fuel = fuel_capacity  # Starts with a full tank

    def drive(self, distance):
        if distance < 0:
            raise ValueError("Distance cannot be negative.")
        
        fuel_needed = distance / 10  # Assume 10 km/l fuel efficiency
        
        if fuel_needed > self.current_fuel:
            raise RuntimeError("Not enough fuel to drive this distance.")
        
        self.mileage += distance
        self.current_fuel -= fuel_needed
        print(f"Driven {distance} km. Current mileage: {self.mileage} km.")

    def refuel(self, liters):
        if liters < 0:
            raise ValueError("Cannot refuel negative amount.")
        
        if self.current_fuel + liters > self.fuel_capacity:
            raise ValueError("Fuel capacity exceeded.")
        
        self.current_fuel += liters
        print(f"Refueled {liters} liters. Current fuel: {self.current_fuel} liters.")

    def display_details(self):
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

            Create a Documentation with Summary and very detailed of every function, make it more accurate also give examples on how to use it
            """
        }
    ],
    temperature=1,
    max_tokens=1024,
    top_p=1,
    stream=True,
    stop=None,
)

for chunk in completion:
    print(chunk.choices[0].delta.content or "", end="")
