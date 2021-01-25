# zen-observable-ts

Thin wrapper around [`zen-observable`](https://www.npmjs.com/package/zen-observable) and [`@types/zen-observable`](https://www.npmjs.com/package/@types/zen-observable), to support ESM exports as well as CommonJS exports.

## Usage

After installing `zen-observable-ts` using a tool like [npm](https://www.npmjs.com/package/npm) or [yarn](https://yarnpkg.com/), you can import the `Observable` class by name:
```js
import { Observable } from "zen-observable-ts";
```
Note that this package does not currently have a default export, so the `{}` braces are mandatory.

## Future plans

As explained in https://github.com/apollographql/apollo-client/pull/7615, the `zen-observable-ts` package exists to fill a gap in the functionality of the `zen-observable` package, so we will retire this package in favor of using `zen-observable` directly, when/if [this PR](https://github.com/zenparsing/zen-observable/pull/74) is ever merged.
