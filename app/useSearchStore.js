import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchHistory: [],
  segmentedControl: "featured",
  data: [],

  fetchData: async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      set({ data: jsonData });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },

  addSearchItem: (item) =>
    set((state) => {
      const newHistory = state.searchHistory.filter(
        (searchItem) => searchItem.toLowerCase() !== item.toLowerCase()
      );
      newHistory.unshift(item);
      return { searchHistory: newHistory };
    }),

  deleteSearchItem: (item) =>
    set((state) => {
      const newHistory = state.searchHistory.filter(
        (searchItem) => searchItem.toLowerCase() !== item.toLowerCase()
      );
      return { searchHistory: newHistory };
    }),

  clearSearchHistory: () => set({ searchHistory: [] }),
  updateSegmentedControl: (newValue) => set({ segmentedControl: newValue }),

  favorites: [],
  toggleFavorite: (name) =>
    set((state) => {
      const isFavorite = state.favorites.includes(name);
      if (isFavorite) {
        return { favorites: state.favorites.filter((fav) => fav !== name) };
      } else {
        return { favorites: [...state.favorites, name] };
      }
    }),
}));

export default useSearchStore;
