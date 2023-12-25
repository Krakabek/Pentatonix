import {Notes} from "./notes/notes";
import React from "react";

export enum Instrument {
    guitar = "Guitar",
    piano = "Piano"
}

export type InstrumentRenderer = (props: { allowedNotes: Array<Notes> }) => JSX.Element;