import {Intervals} from "./intervals";

export const MinorScale: Array<Intervals> = [
    Intervals.step,
    Intervals.halfStep,
    Intervals.step,
    Intervals.step,
    Intervals.halfStep,
    Intervals.step,
];

export const MinorPentatonicScale: Array<Intervals> = [
    Intervals.minorThird,
    Intervals.step,
    Intervals.step,
    Intervals.minorThird,
];

export const MajorScale: Array<Intervals> = [
    Intervals.step,
    Intervals.step,
    Intervals.halfStep,
    Intervals.step,
    Intervals.step,
    Intervals.step,
];


export const MajorPentatonicScale: Array<Intervals> = [
    Intervals.step,
    Intervals.step,
    Intervals.minorThird,
    Intervals.step,
];

export interface ScaleInfo {
    name: string;
    scale: Array<Intervals>;
}

export const AllScales: Array<ScaleInfo> = [
    {
        name: "Minor",
        scale: MinorScale,
    },
    {
        name: "Major",
        scale: MajorScale,
    },
    {
        name: "Minor Pentatonic",
        scale: MinorPentatonicScale,
    },
    {
        name: "Major Pentatonic",
        scale: MajorPentatonicScale,
    },
];
