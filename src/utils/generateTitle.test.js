import { test, expect } from "vitest";
import GenerateTitle from "./generateTitle";

test("GenerateTitle gibt den richtigen Titel zurück", () => {
  expect(GenerateTitle()).toBe("4 Gewinnt");
});
