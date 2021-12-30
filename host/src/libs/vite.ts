export const interopDefault = <T>(value: T): T => {
  if (process.env.NODE_ENV === "development") {
    return value;
  } else {
    return (value as any).default;
  }
};
