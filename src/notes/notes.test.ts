import {applyInterval, Intervals} from "./intervals";
import {Notes} from "./notes";
import {Scaler} from "./scaler";
import {
    AeolianScale,
    DorianScale,
    IonianScale,
    LocrianScale,
    LydianScale,
    MajorPentatonicScale,
    MixolydianScale,
    PhrygianScale
} from "./scales";

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
        expect(Scaler.createScale(Notes.A, AeolianScale))
            .toEqual([Notes.A, Notes.B, Notes.C, Notes.D, Notes.E, Notes.F, Notes.G]);
    });

    it("should create major scale by given major scale config", () => {
        expect(Scaler.createScale(Notes.C, IonianScale))
            .toEqual([Notes.C, Notes.D, Notes.E, Notes.F, Notes.G, Notes.A, Notes.B]);
    });

    it("should create major pentatonic scale by given scale config", () => {
        expect(Scaler.createScale(Notes.C, MajorPentatonicScale))
            .toEqual([Notes.C, Notes.D, Notes.E, Notes.G, Notes.A]);
    });

    describe("exotic scales", () => {
        it("should create Ionian mode same as Major scale", () => {
            expect(Scaler.createScale(Notes.C, IonianScale))
                .toEqual([Notes.C, Notes.D, Notes.E, Notes.F, Notes.G, Notes.A, Notes.B]);
        });
        it("should create Dorian mode same as Major scale", () => {
            expect(Scaler.createScale(Notes.D, DorianScale))
                .toEqual([Notes.D, Notes.E, Notes.F, Notes.G, Notes.A, Notes.B, Notes.C]);
        });
        it("should create Phrygian mode on C major gamma starting from note E", () => {
            expect(Scaler.createScale(Notes.E, PhrygianScale))
                .toEqual([Notes.E, Notes.F, Notes.G, Notes.A, Notes.B, Notes.C, Notes.D]);
        });
        it("should create Lydian mode on C major gamma starting from note F", () => {
            expect(Scaler.createScale(Notes.F, LydianScale))
                .toEqual([Notes.F, Notes.G, Notes.A, Notes.B, Notes.C, Notes.D, Notes.E]);
        });
        it("should create Mixolydian mode on C major gamma starting from note G", () => {
            expect(Scaler.createScale(Notes.G, MixolydianScale))
                .toEqual([Notes.G, Notes.A, Notes.B, Notes.C, Notes.D, Notes.E, Notes.F]);
        });
        it("should create Aeolian mode on C major gamma starting from note A", () => {
            expect(Scaler.createScale(Notes.A, AeolianScale))
                .toEqual([Notes.A, Notes.B, Notes.C, Notes.D, Notes.E, Notes.F, Notes.G]);
        });
        it("should create Locrian mode on C major gamma starting from note B", () => {
            expect(Scaler.createScale(Notes.B, LocrianScale))
                .toEqual([Notes.B, Notes.C, Notes.D, Notes.E, Notes.F, Notes.G, Notes.A]);
        });
    });

    describe("removing interval from scale", () => {
        it("should keep only fifth when removing third from chord", () => {
            expect(Scaler.skipStages([Intervals.minorThird, Intervals.majorThird], [2])).toEqual([Intervals.fifth]);
        });
        it("should create minor pentatonic from minor scale", () => {
            expect(Scaler.skipStages(AeolianScale, [2, 6]))
                .toEqual([
                    Intervals.minorThird,
                    Intervals.step,
                    Intervals.step,
                    Intervals.minorThird,
                    Intervals.step,
                ]);
        });
    });

    describe("Shifting root note", () => {
        it("should create dorian by shifting start to second interval", () => {
            expect(Scaler.shiftScale(IonianScale, 2))
                .toEqual([
                    Intervals.step,
                    Intervals.halfStep,
                    Intervals.step,
                    Intervals.step,
                    Intervals.step,
                    Intervals.halfStep,
                    Intervals.step,
                ])
        });
        it("should create minor by shifting start to sixth interval", () => {
            expect(Scaler.shiftScale(IonianScale, 6))
                .toEqual([
                    Intervals.step,
                    Intervals.halfStep,
                    Intervals.step,
                    Intervals.step,
                    Intervals.halfStep,
                    Intervals.step,
                    Intervals.step,
                ])
        });
    });
});
