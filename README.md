# Vitest Gherkin

Vitest Gherkin is a [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)/[Cucumber](https://cucumber.io/) syntax integration for the [Vitest](https://vitest.dev/) testing framework.

## Installation

NPM:

```
npm i -D vitest-gherkin
```

## Usage

### Enable `Vitest Gherkin` integration for all tests:

```javascript
// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    {
      name: "setup",
      config: () => ({
        test: {
          setupFiles: ["./setupVitest.js"],
        },
      }),
    },
  ],
});

// inside setupVitest.js
import "vitest-gherkin";
```

### Test structure

```javascript
Feature("Some feature", () => {
  Scenario("Some Scenario", () => {
    Given("Example", () => {});
    And("Another example", () => {});
    When("Another example", () => {});
    Then("Another example", () => {});
  });
});
```

The common vitest functions (`describe`, `it`, `before`, `after`, etc) are also available and can be used together with Vitest Gherkin.

You can also import it like this at the top of a test-file:

```javascript
import "vitest-gherkin";

Feature("Some feature", () => {
  /**/
});
```

## API

The Vitest Gherkin integration adds the following functions to the global scope:

- `Feature | Suite`
  - `Scenario | Describe`
    - `Given | Test`
    - `When | Test`
    - `Then | Test`
    - `And | Test`
    - `But | Test`

### lifecycle hooks:

- `beforeEachScenario | beforeEach`
- `beforeAllScenarios | beforeAll`

Example:

```javascript
Feature("beforeEachScenario hook", () => {
  let num = 0;
  beforeEachScenario(() => {
    num = 0;
  });

  Scenario("Add value to 'num'", () => {
    Given("add 2 to 'num'", () => {
      num += 2;
      expect(num).toEqual(2);
    });
  });

  Scenario("Verify that 'num' has been reset", () => {
    Given("'num' has been reset to 0", () => {
      expect(num).toEqual(0);
    });
  });
});
```

### All of the default functionality from Vitest is still available.
