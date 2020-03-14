import React, {ChangeEvent} from "react";
import "./App.scss";
import {AllNotes, NoteNames, Notes} from "./notes/notes";
import {Scaler} from "./notes/scaler";
import {AllScales, ScaleInfo} from "./notes/scales";
import {GuitarNeckFretNumbers, GuitarString} from "./views/string";

class App extends React.Component<{}, { scaleInfo: ScaleInfo, rootNote: Notes }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            scaleInfo: AllScales[0],
            rootNote: Notes.A,
        };
    }

    private onRootNoteChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            rootNote: Number(event.target.value),
        });
    };

    private onScaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            scaleInfo: AllScales.find(scale => scale.name === event.target.value) || AllScales[0],
        });
    };

    render() {
        const allowedNotes = Scaler.createScale(this.state.rootNote, this.state.scaleInfo.scale);
        return (
            <div className="App">
                <GuitarNeck allowedNotes={allowedNotes}/>
                <select name="root-note"
                        id="root-note"
                        value={this.state.rootNote}
                        onChange={this.onRootNoteChange}>
                    {AllNotes.map(note => {
                        return <option value={note}
                                       key={note}>
                            {NoteNames[note]}
                        </option>;
                    })}
                </select>
                <select name="scale"
                        id="scale"
                        value={this.state.scaleInfo.name}
                        onChange={this.onScaleChange}>
                    {AllScales.map((scaleInfo) => {
                        return <option value={scaleInfo.name}
                                       key={scaleInfo.name}>
                            {scaleInfo.name}
                        </option>;
                    })}
                </select>
            </div>
        );
    }
}

export function GuitarNeck(props: { allowedNotes: Array<Notes> }) {
    return <div className="p-neck">
        <GuitarString note={Notes.E} notesInScale={props.allowedNotes}/>
        <GuitarString note={Notes.B} notesInScale={props.allowedNotes}/>
        <GuitarString note={Notes.G} notesInScale={props.allowedNotes}/>
        <GuitarString note={Notes.D} notesInScale={props.allowedNotes}/>
        <GuitarString note={Notes.A} notesInScale={props.allowedNotes}/>
        <GuitarString note={Notes.E} notesInScale={props.allowedNotes}/>
        <GuitarNeckFretNumbers/>
    </div>
}

export default App;
