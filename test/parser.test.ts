import { describe, it, expect } from 'vitest'
import { parseInputStr, parseCommand, parseCommands } from '../src/parser.js'
import { ZodError } from 'zod'

describe("parseInputStr", () => {
  const cases: Array<{ name: string; input: unknown }> = [
    { name: "undefined", input: undefined },
    { name: "null", input: null },
    { name: "number", input: 123 },
  ];

  it.each(cases)("throws for $name", ({ input }) => {
    expect(() => parseInputStr(input)).toThrow(ZodError);
  });
});


describe("parseCommand", () => {
  const cases: Array<{ name: string; input: unknown }> = [
    { name: "undefined", input: undefined },
    { name: "null", input: null },
    { name: "number", input: 123 },
    { name: "arbitraryString", input: "blahblah" }
  ];

  it.each(cases)("throws for $name", ({ input }) => {
    expect(() => parseCommand(input)).toThrow(ZodError);
  });
})