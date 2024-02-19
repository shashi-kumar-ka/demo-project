import { Action } from "redux";

export interface FavoriteAction extends Action {
  type: "ADD_FAVORITE" | "REMOVE_FAVORITE";
  id: string;
}

const initialState: { [key: string]: boolean } = {};

export const favoritesReducer = (
  state = initialState,
  action: FavoriteAction
) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, [action.id]: true };
    case "REMOVE_FAVORITE":
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export const addFavorite = (id: string) => ({
  type: "ADD_FAVORITE",
  id,
});

export const removeFavorite = (id: string) => ({
  type: "REMOVE_FAVORITE",
  id,
});
