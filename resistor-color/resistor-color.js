export const colorCode = color => {
  const lowercaseColor = color.toLowerCase();
  return COLORS.indexOf(lowercaseColor);
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];
