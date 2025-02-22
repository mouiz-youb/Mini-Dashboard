import { create } from "zustand";

// Define the type for the store state
interface ClickState {
  click: boolean;
  setClick: () => void;
}

// Create the store with TypeScript types
export const useClick = create<ClickState>((set) => ({
  click: false, // Initial state
  setClick: () => set((state) => ({ click: !state.click })), // Action to toggle `click`
}));
