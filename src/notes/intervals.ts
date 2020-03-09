import {AllNotes, Notes} from "./notes";

export enum Intervals {
    unison,
    halfStep,
    step,
    minorThird,
    majorThird,
    fourth,
    tritone,
    fifth,
    minorSixth,
    majorSixth,
    minorSeventh,
    majorSeventh,
    octave,
}

export function applyInterval(rootNote: Notes, interval: number) {
    const noteIntex = AllNotes.indexOf(rootNote);
    return AllNotes[(noteIntex + interval) % AllNotes.length];
}
