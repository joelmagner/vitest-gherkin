import { describe, Suite, Test } from "vitest";

declare var Feature: Suite;
declare var Scenario: typeof describe;
declare var Given: Test;
declare var When: Test;
declare var Then: Test;
declare var And: Test;
declare var But: Test;
