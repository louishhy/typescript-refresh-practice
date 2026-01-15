# Assignment

## Build a Testable TypeScript CLI Tool with CI

## Overview

The goal of this assignment is to practice real-world engineering workflows rather than implementing complex product features.

You will build a small command-line tool using Node.js and TypeScript. The functionality itself is intentionally simple. The focus is on code structure, testability, and continuous integration.

## Functional Requirements

The program must run as a command-line application, for example:

```bash
node dist/index.js <input> [options]
```


The program must:

- Accept a string as input  
- Apply one or more text transformation rules  
- Output the transformed result to stdout  

The following transformation rules must be supported:

- Convert text to lowercase  
- Trim leading and trailing whitespace  
- Collapse multiple consecutive spaces into a single space  

Transformation rules must be composable.  
For example:

- Lowercase and trim  
- Only collapse spaces  

If no transformation rule is provided, the program must fail with a clear and user-friendly usage message.

## Technical Constraints

### TypeScript

- `any` is not allowed  
- Strict mode must be enabled  
- Core logic must be implemented as pure functions  
- CLI parsing and business logic must be clearly separated  

The business logic must be testable without invoking the CLI.


### Testing

- Use Jest or Vitest  
- Tests must cover:
  - Normal cases  
  - Edge cases, such as empty strings or strings containing only whitespace  
  - Invalid input scenarios  
- Tests must be deterministic and order-independent  
- High coverage is not the goal; you should be able to explain why your test cases are sufficient  


### Continuous Integration

- Use GitHub Actions  
- The CI pipeline must include:
  - Dependency installation  
  - TypeScript compilation or type checking  
  - Test execution  
- Any failure must cause the pipeline to fail  
- Tests must not be skipped in CI  


## Code Quality

- Project structure should clearly communicate intent  
- Function and variable names should reflect responsibility  
- Error messages should be understandable by users, not only developers  

The README must explain:

- How to run the program  
- How to run tests  
- Key design decisions and trade-offs  


## Submission Expectations

You should be able to answer the following questions:

- Why separate CLI code from core logic  
- Which parts were intentionally kept simple and why  
- What you would improve next if this were a long-term project  
