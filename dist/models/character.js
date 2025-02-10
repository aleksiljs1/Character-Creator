"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(data) {
        this.gender = data.gender;
        this.hair = data.hair;
        this.facialHair = data.facialHair;
        this.eyes = data.eyes;
        this.size = data.size;
    }
    toString() {
        return `Character Details:
- Gender: ${this.gender}
- Hair: ${this.hair}
- Facial Hair: ${this.facialHair}
- Eyes: ${this.eyes}
- Size: ${this.size}`;
    }
}
exports.Character = Character;
