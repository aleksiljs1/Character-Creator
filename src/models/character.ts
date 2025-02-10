
import { CharacterData } from "./character-data";
export class Character {
     gender: string;
     hair: string;
     facialHair: string;
     eyes: string;
     size: number;

    constructor(data: CharacterData) {
        this.gender = data.gender;
        this.hair = data.hair;
        this.facialHair = data.facialHair;
        this.eyes = data.eyes;
        this.size = data.size;
    }

    toString(): string {
        return `Character Details:
- Gender: ${this.gender}
- Hair: ${this.hair}
- Facial Hair: ${this.facialHair}
- Eyes: ${this.eyes}
- Size: ${this.size}`;
    }
}


