import * as React from "react";
import {applyInterval, Intervals} from "../notes/intervals";
import {NoteNames, Notes} from "../notes/notes";

interface NoteProps {
    note: Notes;
}

interface GuitarStringProps extends NoteProps {
    notesInScale: Array<Notes>;
}

export class GuitarString extends React.PureComponent<GuitarStringProps, {}> {
    private frets: Array<Notes>;

    constructor(props: GuitarStringProps) {
        super(props);
        this.frets = this.createFrets();
    }


    render() {
        return <div className="p-string">
            <div className="p-string-note">{NoteNames[this.props.note]}</div>
            <div className="p-string__frets">
                {this.frets.map(fretNote => {
                    return <GuitarFret note={fretNote}
                                       key={fretNote}
                                       isActive={this.props.notesInScale.includes(fretNote)}
                                       isRoot={this.props.notesInScale[0] === fretNote}
                    />
                })}
            </div>
        </div>;
    }

    private createFrets(): Array<Notes> {
        const frets: Array<Notes> = [];
        let currentNote = this.props.note;
        for (let i = 0; i < 12; i++) {
            let newNote = applyInterval(currentNote, Intervals.halfStep);
            frets.push(newNote);
            currentNote = newNote;
        }
        return frets;
    }
}

interface GuitarFretsProps extends NoteProps {
    isActive: boolean;
    isRoot: boolean;
}

export class GuitarFret extends React.PureComponent<GuitarFretsProps, {}> {
    render() {
        const activeClassName = this.props.isActive ? "p-fret--active" : "";
        const rootClassName = this.props.isRoot ? "p-fret--root" : "";
        return <div className={`p-fret ${activeClassName} ${rootClassName}`}/>
    }
}

export function GuitarNeckFretNumbers() {
    return <div className="p-string">
        <div className="p-string-note"></div>
        <div className="p-string__frets">
            <div className="p-fake-fret">1</div>
            <div className="p-fake-fret"/>
            <div className="p-fake-fret">3</div>
            <div className="p-fake-fret"/>
            <div className="p-fake-fret">5</div>
            <div className="p-fake-fret"/>
            <div className="p-fake-fret">7</div>
            <div className="p-fake-fret"/>
            <div className="p-fake-fret">9</div>
            <div className="p-fake-fret"/>
            <div className="p-fake-fret"/>
            <div className="p-fake-fret">12</div>
        </div>
    </div>
}
