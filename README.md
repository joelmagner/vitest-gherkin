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

You can also import it like this:

```javascript
import "vitest-gherkin";

Feature("Some feature", () => {
  Scenario("Some Scenario", () => {
    Given("Example", () => {});
    And("Another example", () => {});
    When("Another example", () => {});
    Then("Another example", () => {});
  });
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

### lifecycle hook:

- BeforeEachScenario | BeforeEach

### All of the default functionality from Vitest is still available.
