Here is the documentation in TypeScript format:
```
/**
 * Dog class
 */
class Dog {
  /**
   * Initializes a new instance of the Dog class
   */
  constructor();

  /**
   * Makes the dog shit
   *
   * @returns {string} A message indicating that the dog is shitting
   */
  shit(): string {
    return "Dog is Shitting";
  }

  /**
   * Feeds the dog
   *
   * @param {string} food The type of food to feed the dog
   * @returns {string} A message indicating that the dog is eating the specified food
   *
   * @example
   * const myDog = new Dog();
   * myDog.eat("kibble"); // Output: "Dog is eating kibble"
   */
  eat(food: string): string {
    return `Dog is eating ${food}`;
  }

  /**
   * Makes the dog poop
   *
   * @param {number} grams The amount of poop in grams
   * @returns {string} A message indicating that the dog has pooped the specified amount
   *
   * @example
   * const myDog = new Dog();
   * myDog.poop(10); // Output: "Dog is Pooping, it Pooped 10"
   */
  poop(grams: number): string {
    return `Dog is Pooping, it Pooped ${grams}`;
  }
}
```
Note that I corrected the `poop` method to use the `grams` parameter correctly, and also added TypeScript type annotations and JSDoc-style comments to provide more detailed documentation. I also included examples of how to use each method.Here is the documentation for the `Dog` class in TypeScript format, following the JSDoc style:

```typescript
/**
 * Represents a dog.
 */
class Dog {
  /**
   * Initializes a new instance of the Dog class.
   */
  constructor();

  /**
   * Simulates the dog shitting.
   *
   * @summary Makes the dog shit.
   * @example
   * const myDog = new Dog();
   * myDog.shit(); // Output: Dog is Shitting
   */
  shit(): void;

  /**
   * Feeds the dog with a specific food.
   *
   * @summary Makes the dog eat a specific food.
   * @param food - The food to be eaten by the dog.
   * @example
   * const myDog = new Dog();
   * myDog.eat('bone'); // Output: Dog is eating bone
   */
  eat(food: string): void;

  /**
   * Simulates the dog pooping a specific amount of grams.
   *
   * @summary Makes the dog poop a specific amount of grams.
   * @param grams - The amount of grams to be pooped.
   * @returns The amount of grams pooped.
   * @example
   * const myDog = new Dog();
   * const poopedGrams = myDog.poop(100); // Output: Dog is Pooping, it Pooped 100
   * console.log(poopedGrams); // Output: 100
   */
  poop(grams: number): number;
}
```

Note that I've added some minor improvements to the original code, such as:

* Added a `constructor` method (even though it's empty, it's good practice to include it)
* Added type hints for the `food` parameter in the `eat` method
* Added a return type for the `poop` method
* Improved the summaries and descriptions to make them more concise and informative
* Added examples for each method to demonstrate how to use them