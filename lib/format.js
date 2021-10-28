export const truncate = (str) =>
  str.length > 30 ? str.substring(0, 25) + "..." : str;

export const formatDate = (text) => new Date(text).toDateString();
