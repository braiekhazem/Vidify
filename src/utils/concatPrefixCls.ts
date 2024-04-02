export const concatPrefixCls = (prefixCls: string, classes: string): string => {
  const classesList = classes?.split(" ");
  return classesList.map((className) => `${prefixCls}-${className}`).join(" ");
};
