import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type NoteType = {
    id: string;
    title: string;
    description: string;
    content: string;
    timestamp: number;
};

// A svelte store that stores a list of notes and has method to add notes
export const notesStore = writable<NoteType[]>([]);
export const addNote = (note: NoteType) => {
    notesStore.update((notes) => [...notes, note]);
    console.log("Added note: ", note);
}


const LOCAL_STORAGE_KEY = "notes" as const;

export const initLocalStorage = () => {
    if (browser) {
        const notes = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (notes) {
            notesStore.set(JSON.parse(notes));
        }
        notesStore.subscribe((notes) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
        });
    }
};
    