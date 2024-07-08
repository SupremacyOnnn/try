import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchHistory: [],

  addSearchItem: (item) =>
    set((state) => {
      const newHistory = state.searchHistory.filter(
        (searchItem) => searchItem.toLowerCase() !== item.toLowerCase()
      );
      newHistory.unshift(item);
      return { searchHistory: newHistory };
    }),

  clearSearchHistory: () => set({ searchHistory: [] }),
}));

export default useSearchStore;
