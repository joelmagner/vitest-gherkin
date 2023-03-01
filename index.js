import { beforeEach, describe, suite, test } from "vitest";

globalThis.Feature = suite;
globalThis.Scenario = describe;
globalThis.BeforeEachScenario = beforeEach;
globalThis.Given = test;
globalThis.When = test;
globalThis.Then = test;
globalThis.And = test;
globalThis.But = test;

const Feature = globalThis.Feature;
const Scenario = globalThis.Scenario;
const beforeEachScenario = globalThis.BeforeEachScenario;
const Given = globalThis.Given;
const When = globalThis.When;
const Then = globalThis.Then;
const And = globalThis.And;
const But = globalThis.But;

export { Feature, Scenario, Given, When, Then, And, But, beforeEachScenario };
