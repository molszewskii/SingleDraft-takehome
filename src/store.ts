import { create } from "zustand";

type CardState ={
    expandedCards: Set<number>;
    deletedCards: Set<number>;
    addExpandedCard: (id: number) => void;
    removeExpandedCard: (id: number) => void;
    addDeletedCard: (id: number) => void;
}

export const useStore = create<CardState>((set) => ({
    expandedCards: new Set(),
    deletedCards: new Set(),

    addExpandedCard: (id) => set((state)=>({
        expandedCards: new Set(state.expandedCards).add(id),
    })),

    removeExpandedCard: (id) => set((state)=>{
        const updated = new Set(state.expandedCards);
        updated.delete(id);
        return { expandedCards: updated};
    }),

    addDeletedCard: (id) => set((state)=>({
        deletedCards: new Set(state.deletedCards).add(id),
    })),
}));
