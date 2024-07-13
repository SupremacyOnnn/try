import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const searchStore = (set, get) => ({
  searchHistory: [],
  segmentedControl: "featured",
  data: [],

  fetchData: async () => {
    const currentState = get();
    if (currentState.data.length === 0) {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        set({ data: jsonData });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    } else {
      console.log("Data already populated");
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
});

const useSearchStore = create(
  devtools(
    persist(searchStore, {
      name: "searchStore",
    })
  )
);

export default useSearchStore;
