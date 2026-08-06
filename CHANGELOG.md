# Changelog

All notable changes to this project will be documented in this file.

## [0.1.29] - 2026-08-06

### Fixed
- Fixed cross-module tool schema detection (`ZodType instanceof`) to avoid invalid tool schemas in HITL/tool calls
- Fixed cross-module toolkit detection (`StructuredToolkit instanceof`) to avoid `undefined` tool name conflicts with MCP tools

### Changed
- Simplified docs and release notes wording for user-facing clarity

## [0.1.28] - 2026-08-05

### Added
- **V3 Agent Execution Engine**: Synced with n8n's official V3 agent architecture, enabling native engine request/response cycle and proper sub-agent support
- **HITL (Human-in-the-Loop)**: Full support for `Send and Wait` tool — agent can pause execution and request human confirmation before proceeding
- **Multi-item batch execution**: V3 engine processes items in configurable batches with optional delay between batches
- **Fallback model support**: Configure a secondary LLM that activates when the primary model fails

### Fixed
- **Tool schema cross-module instanceof fix**: Replaced `instanceof ZodType` check with duck-typing (`_def` property detection) to prevent tool schema corruption when multiple Zod instances are loaded (e.g. `send_and_wait` schema becoming `type: null`)
- **MCP toolkit cross-module instanceof fix**: Replaced `instanceof StructuredToolkit` check with duck-typing (`tools` array property detection) to fix `"multiple tools with the same name: 'undefined'"` error when connecting multiple MCP Client Tool nodes
- **ESLint config**: Test files (`*.test.ts`) excluded from typed linting to match tsconfig exclusions

---

## [0.1.27] - 2025-12-30

### Fixed
- **#12**: Fixed dependency conflict preventing installation in n8n
  - Added npm `overrides` to resolve `langfuse-langchain` peer dependency conflict
  - Users can now install the package in n8n Community Nodes without ERESOLVE errors
  - Maintains compatibility with LangChain 1.x while using langfuse-langchain v3

### Technical Details
- The `langfuse-langchain@3.x` package requires `langchain <0.4.0` as a peer dependency
- This package uses `langchain@1.x`, which would normally cause installation failures
- Added `overrides` configuration in package.json to force correct dependency resolution
- This approach allows the package to work in n8n's sandboxed environment without requiring environment variables

---

## [0.1.26] - 2025-12-29

### Fixed
- **#6**: Fixed hardcoded `formatting_instructions` preventing tool usage
  - `formatting_instructions` now only added when Output Parser is connected
  - Allows agent to properly use connected tools without interference
- **#9**: Fixed streaming not enabled due to incorrect typeVersion check
  - Changed condition from `>= 2.1` to `>= 2`
  - Streaming now properly activates when conditions are met

### Added
- Responses API compatibility check to prevent errors with incompatible models
- ESLint TypeScript plugin for better code quality

### Improved
- Memory handling in streaming mode
  - Now uses `loadMemoryVariables()` instead of direct `chatHistory` access
  - Respects context window length configuration
- ESLint configuration with proper TypeScript support

### Changed
- Upgraded to latest LangChain dependencies:
  - `@langchain/classic`: ^1.0.5
  - `@langchain/core`: ^1.0.0
  - `@langchain/openai`: ^1.0.0
  - `langchain`: ^1.1.1

### Documentation
- Added streaming configuration requirements
- Documented webhook streaming setup (requires Response Mode: "Streaming")

---

## Links

- [npm Package](https://www.npmjs.com/package/n8n-nodes-ai-agent-langfuse)
- [GitHub Repository](https://github.com/rorubyy/n8n-nodes-ai-agent-langfuse)
- [Issue Tracker](https://github.com/rorubyy/n8n-nodes-ai-agent-langfuse/issues)
- [Langfuse Documentation](https://langfuse.com/docs)