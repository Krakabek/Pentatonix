import {applyInterval, Intervals} from "./intervals";
import {Notes} from "./notes";

export type ScaleConfig = Array<Intervals>;
export type Scale = Array<Notes>;

export class Scaler {
    static createScale(rootNote: Notes, scaleConfig: ScaleConfig): Scale {
        return scaleConfig.reduce((scale: Array<Notes>, currentInterval: Intervals, index: number) => {
            const newNote = applyInterval(scale[index], currentInterval);
            // scale has root note at start and in the end, but we don't include dups
            if (scale.includes(newNote)) {
                return scale;
            }

            return [
                ...scale,
                newNote,
            ]
        }, [rootNote])
    }

    static skipStages(scaleConfig: ScaleConfig, omitStages: Array<number>): ScaleConfig {
        // minus one because second stage is listed as first element of scale
        // minus one more to start indexing from zero
        const omitIndexes = omitStages.map(toneIndex => toneIndex - 2);
        return scaleConfig.reduce((
            newConfig: ScaleConfig, interval: Intervals, intervalIndex: number, originalScaleConfig: ScaleConfig) => {

            // merge oited interval with proceeding
            if (omitIndexes.includes(intervalIndex)) {
                const newInterval = interval + originalScaleConfig[intervalIndex + 1];
                return [
                    ...newConfig,
                    newInterval,
                ];
            }

            // skip merged intervals
            if (omitIndexes.includes(intervalIndex - 1)) {
                return [
                    ...newConfig,
                ]
            }

            // include ok intervals
            return [
                ...newConfig,
                interval,
            ];
        }, []);
    }

    static shiftScale(scaleConfig: Array<Intervals>, startingPosition: number) {
        const startingIndex = startingPosition - 1;
        return [
            ...scaleConfig.slice(startingIndex, scaleConfig.length),
            ...scaleConfig.slice(0, startingIndex),
        ];
    }
}
