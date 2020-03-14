export enum Notes {
    A,
    A_sharp,
    B,
    C,
    C_sharp,
    D,
    D_sharp,
    E,
    F,
    F_sharp,
    G,
    G_sharp,
}

export const NoteNames: { [key in Notes]: string } = {
    [Notes.A]: "A",
    [Notes.A_sharp]: "A#",
    [Notes.B]: "B",
    [Notes.C]: "C",
    [Notes.C_sharp]: "C#",
    [Notes.D]: "D",
    [Notes.D_sharp]: "D#",
    [Notes.E]: "E",
    [Notes.F]: "F",
    [Notes.F_sharp]: "F#",
    [Notes.G]: "G",
    [Notes.G_sharp]: "G#",
};

export const AllNotes = [
    Notes.A,
    Notes.A_sharp,
    Notes.B,
    Notes.C,
    Notes.C_sharp,
    Notes.D,
    Notes.D_sharp,
    Notes.E,
    Notes.F,
    Notes.F_sharp,
    Notes.G,
    Notes.G_sharp,
];
