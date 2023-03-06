import { beforeAll, beforeEach, describe, Suite, Test } from "vitest";

declare var Feature: Suite;
declare var Given: Test;
declare var When: Test;
declare var Then: Test;
declare var And: Test;
declare var But: Test;
declare var Scenario: typeof describe;
declare var beforeEachScenario: typeof beforeEach;
declare var beforeAllScenarios: typeof beforeAll;
