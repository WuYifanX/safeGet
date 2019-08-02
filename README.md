# SafeGet
Typesafe Lodash Get in TypeScript

## Why safeGet

1. safeGet handle type more easily than lodash get:

```typescript
const deepNestDataset = {
  first: {
    second: {
      third: "third"
    }
  }
}

// typeof resultByLodashGet is any
const resultByLodashGet = _.get(deepNestDataset, "first.second.third")
// with generic, type is correct
const resultByLodashGetByGeneric = _.get<typeof deepNestDataset, "first", "second", "third">(deepNestDataset,
 ["first", "second", "third"])

// typeof resultBySafeGet is correct
const resultBySafeGet = safeGet(deepNestDataset, it => it.first.second.third)
```

## How to install

## How to use
