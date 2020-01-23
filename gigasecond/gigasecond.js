export const gigasecond = date => {
  const dateInMilliseconds = date.getTime();

  return new Date(dateInMilliseconds + 1000000000 * 1000);
};
