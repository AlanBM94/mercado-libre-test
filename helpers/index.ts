export const capitalizeWord = (str: string) => {
  const words = str.split(" ").filter((word) => word !== "");

  return words
    .map((word) => {
      return word[0]?.toUpperCase() + word?.substring(1);
    })
    .join(" ");
};
