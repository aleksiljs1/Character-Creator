import { Character } from "../models/character";
import { CharacterData } from "../models/character-data";

export class CharacterBuilder {
  private data = new CharacterData();

  private static readonly HAIR_TYPES = [
    "None",
    "Curly",
    "Straight",
    "Wavy",
    "Bald",
  ];
  private static readonly FACIAL_HAIR_TYPES = [
    "None",
    "Beard",
    "Mustache",
    "Goatee",
  ];
  private static readonly EYE_TYPES = [
    "Default",
    "Blue",
    "Green",
    "Brown",
    "Hazel",
  ];

  setGender(gender: string): this {
    this.data.gender = gender;
    return this;
  }

  setHair(index: number): this {
    this.data.hair = CharacterBuilder.HAIR_TYPES[index] || "None";
    return this;
  }

  setFacialHair(index: number): this {
    this.data.facialHair = CharacterBuilder.FACIAL_HAIR_TYPES[index] || "None";
    return this;
  }

  setEyes(index: number): this {
    this.data.eyes = CharacterBuilder.EYE_TYPES[index] || "Default";
    return this;
  }

  setSize(size: number): this {
    this.data.size = size;
    return this;
  }

  build(): Character {
    return new Character(this.data);
  }
}
