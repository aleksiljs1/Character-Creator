"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterBuilder = void 0;
const character_1 = require("../models/character");
const character_data_1 = require("../models/character-data");
class CharacterBuilder {
    constructor() {
        this.data = new character_data_1.CharacterData();
    }
    setGender(gender) {
        this.data.gender = gender;
        return this;
    }
    setHair(index) {
        this.data.hair = CharacterBuilder.HAIR_TYPES[index] || "None";
        return this;
    }
    setFacialHair(index) {
        this.data.facialHair = CharacterBuilder.FACIAL_HAIR_TYPES[index] || "None";
        return this;
    }
    setEyes(index) {
        this.data.eyes = CharacterBuilder.EYE_TYPES[index] || "Default";
        return this;
    }
    setSize(size) {
        this.data.size = size;
        return this;
    }
    build() {
        return new character_1.Character(this.data);
    }
}
exports.CharacterBuilder = CharacterBuilder;
CharacterBuilder.HAIR_TYPES = [
    "None",
    "Curly",
    "Straight",
    "Wavy",
    "Bald",
];
CharacterBuilder.FACIAL_HAIR_TYPES = [
    "None",
    "Beard",
    "Mustache",
    "Goatee",
];
CharacterBuilder.EYE_TYPES = [
    "Default",
    "Blue",
    "Green",
    "Brown",
    "Hazel",
];
