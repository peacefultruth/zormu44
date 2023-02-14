type AreTheDependenciesTheSame = boolean;
export const YesTheDependenciesAreTheSame: AreTheDependenciesTheSame = true;
export const NoTheDependenciesAreNotTheSame: AreTheDependenciesTheSame = false;
export const dependenciesVsDependencies = (
  lhs: any[] | null | undefined,
  rhs: any[] | null | undefined
): AreTheDependenciesTheSame => {
  if (!lhs && !rhs) {
    return YesTheDependenciesAreTheSame;
  }
  if (!lhs && rhs) {
    return NoTheDependenciesAreNotTheSame;
  }
  if (lhs && !rhs) {
    return NoTheDependenciesAreNotTheSame;
  }
  if (lhs && rhs) {
    if (lhs.length != rhs.length) {
      return NoTheDependenciesAreNotTheSame;
    }
    const isAnyDependencyDifferentSinceLastTime = lhs.some((lhs, index) =>
      !Object.is(lhs, rhs[index])
    );
    if (isAnyDependencyDifferentSinceLastTime) {
      return NoTheDependenciesAreNotTheSame;
    }
  }
  return YesTheDependenciesAreTheSame;
};
