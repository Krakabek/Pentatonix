import {applyInterval} from "./intervals";
import {Notes} from "./notes";

export type ScaleConfig = Array<number>;
export type Scale = Array<Notes>;

export class Scaler {
    static createScale(rootNote: Notes, scaleConfig: ScaleConfig): Scale {
        return scaleConfig.reduce((scale, currentInterval, index) => {
            return [
                ...scale,
                applyInterval(scale[index], currentInterval),
            ]
        }, [rootNote]);
    }
}
