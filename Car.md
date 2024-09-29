Here is the documentation for the `Car` class:

**Class `Car`**
================

**Summary**
-----------

The `Car` class represents a vehicle with attributes such as make, model, year, color, mileage, fuel type, and fuel capacity. It provides methods to drive the car, refuel it, and display its details.

**Attributes**
--------------

### `make`
#### Type: `str`
#### Summary: The manufacturer of the car (e.g., Toyota, Honda, Ford).
#### Example: `my_car = Car(make="Toyota", ...)`

### `model`
#### Type: `str`
#### Summary: The specific model of the car (e.g., Corolla, Civic, Mustang).
#### Example: `my_car = Car(model="Corolla", ...)`

### `year`
#### Type: `int`
#### Summary: The year the car was manufactured.
#### Example: `my_car = Car(year=2020, ...)`

### `color`
#### Type: `str`
#### Summary: The color of the car (e.g., Blue, Red, Silver).
#### Example: `my_car = Car(color="Blue", ...)`

### `mileage`
#### Type: `int`
#### Summary: The current mileage of the car in kilometers. Defaults to 0.
#### Example: `my_car = Car(mileage=50000, ...)`

### `fuel_type`
#### Type: `str`
#### Summary: The type of fuel the car uses (e.g., Gasoline, Diesel,Electric). Defaults to "Gasoline".
#### Example: `my_car = Car(fuel_type="Diesel", ...)`

### `fuel_capacity`
#### Type: `int`
#### Summary: The fuel capacity of the car's tank in liters. Defaults to 50.
#### Example: `my_car = Car(fuel_capacity=60, ...)`

### `current_fuel`
#### Type: `int`
#### Summary: The current amount of fuel in the car's tank in liters. Initialized to `fuel_capacity`.

**Methods**
----------

### `drive(distance)`
#### Parameters:
##### `distance` (int): The distance to drive in kilometers.
#### Summary: Drive the car for a specified distance, updating the mileage and fuel levels accordingly.
#### Raises:
##### `ValueError`: If `distance` is negative.
##### `RuntimeError`: If there is not enough fuel to drive the specified distance.
#### Example:
```python
my_car = Car(make="Toyota", model="Corolla", year=2020, color="Blue")
my_car.drive(50)  # Drives 50 km
```
### `refuel(liters)`
#### Parameters:
##### `liters` (int): The amount of fuel to add to the tank in liters.
#### Summary: Refuel the car with the specified amount of fuel, updating the `current_fuel` attribute.
#### Raises:
##### `ValueError`: If `liters` is negative or exceeds the `fuel_capacity`.
#### Example:
```python
my_car = Car(make="Toyota", model="Corolla", year=2020, color="Blue")
my_car.refuel(20)  # Refuels 20 liters
```
### `display_details()`
#### Summary: Print a summary of the car's attributes.
#### Example:
```python
my_car = Car(make="Toyota", model="Corolla", year=2020, color="Blue")
my_car.display_details()
```
Output:
```
Car Details:
Make: Toyota
Model: Corolla
Year: 2020
Color: Blue
Mileage: 0 km
Fuel Type: Gasoline
Fuel Capacity: 50 liters
Current Fuel: 50 liters
```

I hope this documentation is helpful!