---
name: OpenAPI enum integration in DESIGN-built forms
description: How DESIGN subagents tend to mis-wire OpenAPI string enums in react-hook-form + zod, and the fix.
---

When an OpenAPI request body has a string `enum` field, the DESIGN subagent often wires the form's zod schema with `z.nativeEnum(SomeEnum)` and tries to import the enum from a deep generated path like `@workspace/api-zod/src/generated/types/<field>`. Both are wrong:

- The deep `src/generated/types/...` import path does not resolve (TS2307) — the api-zod barrel does not re-export per-field enum members at that path.
- `z.nativeEnum(...)` then yields a value whose type is not assignable to the generated `LeadInput`/body type (the body field is a plain `string` union), causing a second TS error.

**Fix:** drop the import and use a plain literal enum in the form schema:
`z.enum(["1-49","50-300","301-800","801-2500","2500+"], { required_error: "..." })`.
The literal union is assignable to the body `string` field and needs no generated import.

**Why:** Orval emits the enum values inline in the schema/types; there is no stable barrel export to import a runtime enum object from. A literal `z.enum` keeps the union narrow and matches the generated body type.

**How to apply:** after a DESIGN subagent builds a fullstack form, `pnpm --filter @workspace/<slug> run typecheck` and look for TS2307 on a `@workspace/api-zod/src/generated/types/...` import plus a TS2322 "unknown is not assignable" on the form values — replace `nativeEnum` + deep import with a literal `z.enum`.
