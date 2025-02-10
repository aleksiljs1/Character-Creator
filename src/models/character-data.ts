export class CharacterData {
  gender: string = "Unknown";
  hair: string = "None";
  facialHair: string = "None";
  eyes: string = "Default";
  size: number = 0;

  constructor(data?: Partial<CharacterData>) {
    Object.assign(this, data);
  }
}
