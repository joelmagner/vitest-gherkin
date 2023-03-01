# Vitest Gherkin

Vitest Gherkin is a [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)/[Cucumber](https://cucumber.io/) syntax integration for the [Vitest](https://vitest.dev/) testing framework.

## Installation

NPM:

```
npm i -D vitest-gherkin
```

## Usage

### Enable the vitest-gherkin integration

### Test structure

```javascript
Feature("Some feature", () => {
  Scenario("Some Scenario", () => {
    let number = 2;

    Given("a number", () => {
      number.should.exist;
    });
    And("that number is 2", () => {
      number.should.equal(2);
    });

    When("adding 40", () => {
      number += 40;
    });

    Then("the number should be 42", () => {
      number.should.equal(42);
    });
  });
});
```

The result will look something like this:

The common vitest functions (`describe`, `it`, `before`, `after`, etc) are also available and can be used together with Vitest Gherkin.

Your tests should look like this:

```
import 'vitest-gherkin';

Feature('Some feature', () => {

  Scenario('Some Scenario', () => {

    let number = 2;

    Given('a number', () => {

    });
    And('that number is 2', () => {

    });

    When('adding 40', () => {

    });

    Then('the number should be 42', () => {

    });
  });
});
```

## API

The Vitest Gherkin integration adds the following functions to the global scope:

- `Feature | feature`
  - `Scenario | scenario`
    - `Given | given`
    - `When | when`
    - `Then | then`
    - `And | and`
    - `But | but`

### `.skip`

Skips a test clause. Works on all test functions.

```javascript
Feature("Some feature", () => {
  Scenario.skip("Skipped scenario", () => {
    // ...
  });

  Scenario("Ordinary", () => {
    // ...
  });
});
```

### `.only`

Only run the specified test clause. Works on all test functions.

```javascript
Feature("Some feature", () => {
  Scenario("First scenario", () => {
    // ...
  });

  Scenario("Second scenario", () => {
    // ...
  });

  Scenario.only("Only I will run!", () => {
    // ...
  });

  // ...
});
```

```javascript
Feature("Some feature", () => {
  Scenario("First scenario", () => {
    // ...
  });

  Scenario("Second scenario", () => {
    // ...
  });

  // ...
});
```

```javascript
Feature("Some feature", () => {
  // ...
});

Feature("Another feature", () => {
  // ...
});

// ...
```
