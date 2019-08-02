export default function safeGet<T, R>(
  object: T,
  func: (data: T) => R,
  defaultValue?: R
): R | undefined {
  let result = defaultValue
  try {
    result = func(object)
  } catch (err) {}

  if (result === undefined) {
    result = defaultValue
  }
  return result
}
