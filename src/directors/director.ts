import { CharacterBuilder } from "../builders/character-builder";
import { Character } from "../models/character";

export class Director {
    constructor(private builder: CharacterBuilder) {}

    buildWarrior(): Character {
        return this.builder.setGender('Male').setHair(1).setFacialHair(1).setEyes(3).setSize(190).build();
    }

    buildMage(): Character {
        return this.builder.setGender('Female').setHair(2).setFacialHair(0).setEyes(2).setSize(170).build();
    }

    buildElf(): Character {
        return this.builder.setGender('Male').setHair(3).setFacialHair(0).setEyes(1).setSize(162).build();
    }
}
