export const getCssVariableValue = (variableName: string, element?: HTMLElement) => {
  const value = window
    .getComputedStyle(element ?? document.documentElement)
    .getPropertyValue(variableName)
    .trim();

  return value;
};
