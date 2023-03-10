import { afterAll, afterEach, beforeAll, beforeEach, describe, suite, test } from "vitest";

globalThis.Feature = suite;
globalThis.Scenario = describe;
globalThis.beforeEachScenario = beforeEach;
globalThis.afterEachScenario = afterEach;
globalThis.beforeAllScenarios = beforeAll;
globalThis.afterAllScenarios = afterAll;
globalThis.Given = test;
globalThis.When = test;
globalThis.Then = test;
globalThis.And = test;
globalThis.But = test;

const Feature = globalThis.Feature;
const Scenario = globalThis.Scenario;
const beforeEachScenario = globalThis.beforeEachScenario;
const afterEachScenario = globalThis.afterEachScenario;
const beforeAllScenarios = globalThis.beforeAllScenarios;
const afterAllScenarios = globalThis.afterAllScenarios;
const Given = globalThis.Given;
const When = globalThis.When;
const Then = globalThis.Then;
const And = globalThis.And;
const But = globalThis.But;

export { Feature, Scenario, Given, When, Then, And, But, beforeEachScenario, beforeAllScenarios, afterEachScenario, afterAllScenarios };
