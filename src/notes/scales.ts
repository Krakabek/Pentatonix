import {Intervals} from "./intervals";
import {Scaler} from "./scaler";

// major scale
export const IonianScale: Array<Intervals> = [
    Intervals.step,
    Intervals.step,
    Intervals.halfStep,
    Intervals.step,
    Intervals.step,
    Intervals.step,
    Intervals.halfStep,
];

export const MajorPentatonicScale = Scaler.skipStages(IonianScale, [4, 7]);

export const DorianScale = Scaler.shiftScale(IonianScale, 2);

export const PhrygianScale = Scaler.shiftScale(IonianScale, 3);
export const LydianScale = Scaler.shiftScale(IonianScale, 4);

export const MixolydianScale = Scaler.shiftScale(IonianScale, 5);

// minor scale
export const AeolianScale = Scaler.shiftScale(IonianScale, 6);

export const MinorPentatonicScale = Scaler.skipStages(AeolianScale, [2, 6]);

export const LocrianScale = Scaler.shiftScale(IonianScale, 7);

export interface ScaleInfo {
    name: string;
    scale: Array<Intervals>;
}

export const AllScales: Array<ScaleInfo> = [
    {
        name: "Minor",
        scale: AeolianScale,
    },
    {
        name: "Major",
        scale: IonianScale,
    },
    {
        name: "Minor Pentatonic",
        scale: MinorPentatonicScale,
    },
    {
        name: "Major Pentatonic",
        scale: MajorPentatonicScale,
    },
    {
        name: "Ionian",
        scale: IonianScale,
    },
    {
        name: "Dorian",
        scale: DorianScale,
    },
    {
        name: "Phrygian",
        scale: PhrygianScale,
    },
    {
        name: "Lydian",
        scale: LydianScale,
    },
    {
        name: "Mixolydian",
        scale: MixolydianScale,
    },
    {
        name: "Aeolian",
        scale: AeolianScale,
    },
    {
        name: "Locrian",
        scale: LocrianScale,
    },
];
