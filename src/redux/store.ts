import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, peopleSlice } from "./states";

export interface AppsStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppsStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
});
