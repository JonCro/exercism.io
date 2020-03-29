export const abilityModifier = stat => {
  if (stat < 3) throw new Error('Ability scores must be at least 3');
  if (stat > 18) throw new Error('Ability scores can be at most 18');
  return Math.floor((stat - 10) / 2);
};

export class Character {
  constructor() {
    this.rollAbility = Character.rollAbility();
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.strength = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    // roll dice (4 6 sided dice (1-6))
    let counter = 0;
    let total = [];

    while (counter < 4) {
      total.push(Math.floor(Math.random() * 6) + 1);
      counter++;
    }

    // remove the lowest number
    function removeSmallest(arr) {
      const smallest = Math.min(...arr);
      const index = arr.indexOf(smallest);

      return arr.filter((_, i) => i !== index);
    }

    const newTotal = removeSmallest(total);

    // add remaining nums
    const statBase = newTotal.reduce((a, b) => a + b, 0);

    return statBase;
  }
}
