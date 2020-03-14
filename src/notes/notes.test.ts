import {applyInterval, Intervals} from "./intervals";
import {Notes} from "./notes";
import {Scaler} from "./scaler";
import {MajorPentatonicScale, MajorScale, MinorPentatonicScale, MinorScale} from "./scales";

describe("intervals", () => {
    describe("half-step", () => {
        it("should return corresponding half-step", () => {
            const halfSteps = [
                [Notes.A, Notes.A_sharp],
                [Notes.G, Notes.G_sharp],
                [Notes.G_sharp, Notes.A],
                [Notes.B, Notes.C],
            ];
            halfSteps.forEach((pair) => {
                expect(applyInterval(pair[0], Intervals.halfStep)).toBe(pair[1]);
            });
        })
    });

    describe("step", () => {
        it("should return corresponding step", () => {
            const halfSteps = [[Notes.A, Notes.B], [Notes.G, Notes.A], [Notes.E, Notes.F_sharp]];
            halfSteps.forEach((pair) => {
                expect(applyInterval(pair[0], Intervals.step)).toBe(pair[1]);
            });
        })
    });
});

describe("scales", () => {
    it("should create three notes by given step-halfstep config", () => {
        expect(Scaler.createScale(Notes.A, [Intervals.step, Intervals.halfStep]))
            .toEqual([Notes.A, Notes.B, Notes.C]);
    });

    it("should create minor scale by given minor scale config", () => {
        expect(Scaler.createScale(Notes.A, MinorScale))
            .toEqual([Notes.A, Notes.B, Notes.C, Notes.D, Notes.E, Notes.F, Notes.G]);
    });

    it("should create major scale by given major scale config", () => {
        expect(Scaler.createScale(Notes.C, MajorScale))
            .toEqual([Notes.C, Notes.D, Notes.E, Notes.F, Notes.G, Notes.A, Notes.B]);
    });

    it("should create major pentatonic scale by given scale config", () => {
        expect(Scaler.createScale(Notes.C, MajorPentatonicScale))
            .toEqual([Notes.C, Notes.D, Notes.E, Notes.G, Notes.A]);
    });
});
