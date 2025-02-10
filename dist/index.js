"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_builder_1 = require("./builders/character-builder");
const director_1 = require("./directors/director");
const builder = new character_builder_1.CharacterBuilder();
const director = new director_1.Director(builder);
const warrior = director.buildWarrior();
const mage = director.buildMage();
const elf = director.buildElf();
console.log(warrior.toString());
console.log(mage.toString());
console.log(elf.toString());
