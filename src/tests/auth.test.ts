import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.ts";

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});

describe("auth test", () => {
  test("not defined", () => {
    expect(getAPIKey({})).toBe(null)
  });

  test("not defined", () => {
    expect(getAPIKey({"authorization": "ApiKey bob bob bob ApiKey"})).toBe(null)
  });
});


