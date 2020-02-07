export const steps = n => {
  let count = 0;
  let newN = n;

  if (newN <= 0) throw new Error('Only positive numbers are allowed');

  while (newN > 1) {
    if (newN % 2 == 0) {
      newN = newN / 2;
      count++;
    } else {
      newN = newN * 3 + 1;
      count++;
    }
  }

  return count;
};
