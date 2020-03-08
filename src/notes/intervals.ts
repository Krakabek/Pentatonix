import {AllNotes, Notes} from "./notes";

export class Intervals {

    static halfStep(note: Notes) {
        const noteIntex = AllNotes.indexOf(note);
        return AllNotes[(noteIntex + 1) % AllNotes.length];
    }

    static step(note: Notes) {
        const noteIntex = AllNotes.indexOf(note);
        return AllNotes[(noteIntex + 2) % AllNotes.length];
    }
}
