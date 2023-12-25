import NoSleep from "nosleep.js";
import React, {ChangeEvent} from "react";
import "./App.scss";
import {AllNotes, NoteNames, Notes} from "./notes/notes";
import {Scaler} from "./notes/scaler";
import {AllScales, ScaleInfo} from "./notes/scales";
import {Instrument} from "./types";
import {GuitarNeck} from "./views/guitar";
import {Piano} from "./views/piano";

class App extends React.Component<{}, { scaleInfo: ScaleInfo, rootNote: Notes, instrument: Instrument }> {
    private noSleep: NoSleep;

    constructor(props: {}) {
        super(props);
        this.state = {
            scaleInfo: AllScales[0],
            rootNote: Notes.A,
            instrument: Instrument.guitar,
        };

        this.noSleep = new NoSleep();
    }

    enableNoSleep = () => {
        try {
            this.noSleep.enable();
        } catch {
            // no luck today ¯\_(ツ)_/¯
        }
        document.removeEventListener("touchstart", this.enableNoSleep, false);
    };

    componentDidMount(): void {
        document.addEventListener("touchstart", this.enableNoSleep, false);
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

    private onInstrumentChange = (event: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            instrument: event.target.value as Instrument,
        });
    };

    private renderInstrument = (): JSX.Element => {
        const allowedNotes = Scaler.createScale(this.state.rootNote, this.state.scaleInfo.scale);
        if (this.state.instrument === Instrument.guitar) {
            return (<GuitarNeck allowedNotes={allowedNotes}/>);
        }
        if (this.state.instrument === Instrument.piano) {
            return (<Piano allowedNotes={allowedNotes}/>);
        }
        return (<GuitarNeck allowedNotes={allowedNotes}/>);
    }

    render() {
        return (
            <div className="App">
                {this.renderInstrument()}
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
                <select name="instrument"
                        id="instrument"
                        value={this.state.instrument}
                        onChange={this.onInstrumentChange}>
                    <option value={Instrument.guitar}
                            key={Instrument.guitar}>
                        Guitar
                    </option>
                    <option value={Instrument.piano}
                            key={Instrument.piano}>
                        Piano
                    </option>
                </select>
            </div>
        );
    }
}


export default App;
