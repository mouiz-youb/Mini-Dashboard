import { create } from "zustand";

// Define the type for the store state
interface ClickState {
  click: boolean;
  setClick: () => void;
}
interface ClickState2 {
  click2: boolean;
  setClick2: () => void;
}

// Create the store with TypeScript types
export const useClick = create<ClickState>((set) => ({
  click: false, // Initial state
  setClick: () => set((state) => ({ click: !state.click })), // Action to toggle `click`
}));
export const useClick2 = create<ClickState2>((set) => ({
  click2: false, // Initial state
  setClick2: () => set((state) => ({ click2: !state.click2 })), // Action to toggle `click`
}));
