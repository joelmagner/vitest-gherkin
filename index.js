import { beforeEach, describe, suite, test } from "vitest";

globalThis.Feature = suite;
globalThis.Scenario = describe;
globalThis.BeforeEachScenario = beforeEach;
globalThis.Given = test;
globalThis.When = test;
globalThis.Then = test;
globalThis.And = test;
globalThis.But = test;

export { Feature, Scenario, Given, When, Then, And, But, BeforeEachScenario };
