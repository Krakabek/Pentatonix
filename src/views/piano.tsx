import * as React from "react";
import {InstrumentRenderer} from "../types";
import {NoteNames, Notes} from "../notes/notes";
import {applyInterval, Intervals} from "../notes/intervals";

function createOctave(startNote: Notes, numberOfOctaves: number): Array<Notes> {
    const frets: Array<Notes> = [];
    let currentNote = startNote;
    frets.push(currentNote);
    for (let i = 1; i < 12 * numberOfOctaves; i++) {
        let newNote = applyInterval(currentNote, Intervals.halfStep);
        frets.push(newNote);
        currentNote = newNote;
    }
    return frets;
}

export const PianoKey = (props: { note: Notes, isActive: boolean, isRoot: boolean; }) => {
    const noteName = NoteNames[props.note];
    const isBlackKey = noteName.includes("#");
    const activeClassName = props.isActive ? "p-key--active" : "";
    const rootClassName = props.isRoot ? "p-key--root" : "";
    const sharpClassName = isBlackKey ? "p-key--black" : "p-key--white";
    return <div className={`p-key ${sharpClassName} ${activeClassName} ${rootClassName}`} data-note={noteName}></div>
}

export const Piano: InstrumentRenderer = (props) => {
    const octave = createOctave(Notes.C, 2);
    return <div className="p-piano">
        {octave.map(note => {
            const isActive = props.allowedNotes.includes(note);
            const isRoot = props.allowedNotes.indexOf(note) === 0;
            return <PianoKey note={note} isActive={isActive} isRoot={isRoot} key={note}/>
        })}
    </div>;
};
