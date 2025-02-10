"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    constructor(builder) {
        this.builder = builder;
    }
    buildWarrior() {
        return this.builder
            .setGender("Male")
            .setHair(1)
            .setFacialHair(1)
            .setEyes(3)
            .setSize(190)
            .build();
    }
    buildMage() {
        return this.builder
            .setGender("Female")
            .setHair(2)
            .setFacialHair(0)
            .setEyes(2)
            .setSize(170)
            .build();
    }
    buildElf() {
        return this.builder
            .setGender("Male")
            .setHair(3)
            .setFacialHair(0)
            .setEyes(1)
            .setSize(162)
            .build();
    }
}
exports.Director = Director;
