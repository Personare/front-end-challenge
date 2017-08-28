export function createRequestTypes(base) {
  return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce(
    (res, type) => ({ ...res, [type]: `${base}_${type}` }), {}
  )
}
