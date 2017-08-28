export const flatNormalizedArray = prop =>
  Object.keys(prop).reduce(
    (arr, itemId) => [...arr, prop[itemId]],
  [])
