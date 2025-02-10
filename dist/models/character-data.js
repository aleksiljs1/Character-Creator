"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterData = void 0;
class CharacterData {
    constructor(data) {
        this.gender = "Unknown";
        this.hair = "None";
        this.facialHair = "None";
        this.eyes = "Default";
        this.size = 0;
        Object.assign(this, data);
    }
}
exports.CharacterData = CharacterData;
