import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const searchStore = (set, get) => ({
  searchHistory: [],
  segmentedControl: "featured",
  data: [],
  recentTyped: "",

  setRecentTyped: (value) => set({ recentTyped: value }),

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
  addKpiToLayout: (layoutName, kpiName) => {
    set((state) => {
      const newData = state.data.map((item) => {
        if (item.name === layoutName) {
          const updatedKpiUsed = [...item.KpiUsed, kpiName];
          return {
            ...item,
            KpiUsed: updatedKpiUsed,
            noOfKpiUse: item.noOfKpiUse + 1,
          };
        }
        return item;
      });
      return { data: newData };
    });
  },

  deleteKpiUsed: (layoutName, kpiName) => {
    set((state) => {
      const newData = state.data.map((item) => {
        if (item.name === layoutName) {
          const updatedKpiUsed = item.KpiUsed.filter(
            (name) => name !== kpiName
          );
          return {
            ...item,
            KpiUsed: updatedKpiUsed,
            noOfKpiUse: item.noOfKpiUse - 1,
          };
        }
        return item;
      });
      return { data: newData };
    });
  },
  addKpiToPages: (layoutName, kpiName, pageNumber) => {
    set((state) => {
      const newData = state.data.map((item) => {
        if (item.name === layoutName) {
          let pageNo = `page${pageNumber}`;
          let pageData = item.pages;
          pageData[pageNo] = [...pageData[pageNo], kpiName];
          return {
            ...item,
            pages: pageData,
          };
        }
        return item;
      });
      return { data: newData };
    });
  },
  addPagesToLayout: (layoutName, pageNumber) => {
    set((state) => {
      const newData = state.data.map((item) => {
        if (item.name.toLowerCase() === layoutName.toLowerCase()) {
          let pageNo = `page${pageNumber}`;
          let pageData = item.pages;
          pageData[pageNo] = [];
          return {
            ...item,
            amountOfPage: item.amountOfPage + 1,
            pages: pageData,
          };
        }
        return item;
      });
      return { data: newData };
    });
  },
  requestAccess: (name) =>
    set((state) => {
      const updatedData = state.data.map((item) => {
        if (item.name.toLowerCase() === name.toLowerCase()) {
          return { ...item, submitted: true };
        }
        return item;
      });
      return { data: updatedData };
    }),
  addRequestAccessToRequest: (name) =>
    set((state) => {
      const updatedData = state.data.map((item) => {
        if (item.name.toLowerCase() === "request") {
          let newRequestData = [
            ...item.data,
            `Access request raised for ${name}`,
          ];
          return {
            ...item,
            data: newRequestData,
          };
        }
        return item;
      });
      return { data: updatedData };
    }),
  approveRequest: (name) =>
    set((state) => {
      const updatedData = state.data.map((item) => {
        if (item.name.toLowerCase() === name.toLowerCase()) {
          return { ...item, affliateApplicability: true };
        }
        if (item.name.toLowerCase() === "request") {
          return {
            ...item,
            data: item.data.filter(
              (request) =>
                !request.includes(`Access request raised for ${name}`)
            ),
          };
        }
        return item;
      });
      return { data: updatedData };
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
