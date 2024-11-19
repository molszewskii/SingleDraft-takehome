import { create } from "zustand";

type CardState ={
    expandedCards: Set<number>;
    deletedCards: Set<number>;
    addExpandedCard: (id: number) => void;
    removeExpandedCard: (id: number) => void;
    addDeletedCard: (id: number) => void;
}

export const useStore = create<State & Actions>((set) => ({}));
