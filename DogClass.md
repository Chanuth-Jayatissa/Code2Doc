Here is the documentation for the `Dog` class:

**Dog Class**
================

The `Dog` class represents a dog with basic behaviors and characteristics.

**Initialization**
----------------

The `Dog` class is initialized using the `__init__` method, which takes no arguments.

**Methods**
------------

### `sleep()`
#### Summary
Causes the dog to sleep.

#### Description
This method makes the dog sleep. When called, it prints a message indicating that the dog is sleeping.

#### Examples
```
my_dog = Dog()
my_dog.sleep()  # Output: Dog is sleeping
```
### `eat(food)`
#### Summary
Feeds the dog with the specified food.

#### Description
This method makes the dog eat the specified food. When called, it prints a message indicating that the dog is eating the specified food.

#### Parameters
* `food` (str): The type of food to feed the dog.

#### Examples
```
my_dog = Dog()
my_dog.eat("kibble")  # Output: Dog is eating kibble
my_dog.eat("bacon")  # Output: Dog is eating bacon
```
### `weight(kg)`
#### Summary
Gets the weight of the dog in kilograms.

#### Description
This method returns the weight of the dog in kilograms. When called, it prints a message indicating the dog's weight.

#### Parameters
* `kg` (float): The weight of the dog in kilograms.

#### Returns
* `float`: The weight of the dog in kilograms.

#### Examples
```
my_dog = Dog()
my_dog.weight(20.5)  # Output: Dog weighs 20.5 kgs
my_dog.weight(30.2)  # Output: Dog weighs 30.2 kgs
```
Note: The `weight` method is not actually storing the weight of the dog, it's just printing the value passed as an argument. In a real-world implementation, you would want to store the weight as an attribute of the `Dog` class.