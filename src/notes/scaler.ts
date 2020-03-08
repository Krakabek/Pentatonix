import {Notes} from "./notes";

export type ScaleInterval = (note: Notes) => Notes;
export type ScaleConfig = Array<ScaleInterval>;
export type Scale = Array<Notes>;

export class Scaler {
    static createScale(rootNote: Notes, scaleConfig: ScaleConfig): Scale {
        const result = [rootNote];
        let previousNote = rootNote;
        for (let i = 0; i < scaleConfig.length; i++) {
            const nextNote = scaleConfig[i](previousNote);
            result.push(nextNote);
            previousNote = nextNote;
        }
        return result;
    }
}
