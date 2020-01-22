export const decodedValue = colors => {
  const mapped = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };
  let decoded = '';

  for (const el of colors) {
    if (mapped.hasOwnProperty(el)) decoded += mapped[el];
  }

  decoded = decoded.slice(0, 2);
  return parseInt(decoded);
};
