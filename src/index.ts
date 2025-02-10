import { CharacterBuilder } from "./builders/character-builder";
import { Director } from "./directors/director";

const builder = new CharacterBuilder();
const director = new Director(builder);

const warrior = director.buildWarrior();
const mage = director.buildMage();
const elf = director.buildElf();

console.log(warrior.toString());
console.log(mage.toString());
console.log(elf.toString());
