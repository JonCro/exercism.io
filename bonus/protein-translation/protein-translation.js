export const translate = (params = '') => {
  if (!params) return [];

  const paramArray = params.match(/.{1,3}/g);
  const translatedArray = [];
  const Aminos = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };

  for (let i = 0; i < paramArray.length; i++) {
    let codon = paramArray[i];

    if (Aminos[codon] == 'STOP') {
      break;
    } else if (!Aminos[codon]) {
      throw new Error('Invalid codon');
    }

    translatedArray.push(Aminos[codon]);
  }

  return translatedArray;
};
