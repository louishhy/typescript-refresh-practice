import { z } from "zod";

const InputStrSchema = z.string()

export const parseInputStr = (value: unknown): string => {
  return InputStrSchema.parse(value);
}

const CommandSchema = z.enum([
  "lowercase",
  "trim",
  "collapse-spaces"
])

export type Command = z.infer<typeof CommandSchema>

export const parseCommand = (value: unknown): Command => {
  return CommandSchema.parse(value);
}

const CommandsSchema = z.array(CommandSchema).nonempty()

export const parseCommands = (value: unknown): Command[] => {
  return CommandsSchema.parse(value);
}