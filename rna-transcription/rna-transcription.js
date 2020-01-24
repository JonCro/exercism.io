export const toRna = dna => {
  if (dna == '') return dna;

  let rna = '';
  const obj = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };

  for (let i = 0; i < dna.length; i++) {
    rna += obj[dna.charAt(i)];
  }

  return rna;
};
