export const decodedValue = ([color1, color2]) => {
  const Colors = [
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

  return Colors.indexOf(color1) * 10 + Colors.indexOf(color2);
};
