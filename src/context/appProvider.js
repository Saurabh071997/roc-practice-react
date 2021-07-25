import { createContext, useContext, useReducer } from "react";
const productData = require("../config/products.json");

export const AppContext = createContext();

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };

    case "FILTER_BY_BRAND":
      let brands;
      if (state.selectedBrand?.includes(action.payload)) {
        brands = state.selectedBrand?.filter((item) => item !== action.payload);
      } else {
        brands = [...state.selectedBrand, action.payload];
      }
      return {
        ...state,
        selectedBrand: brands,
      };

    case "FILTER_BY_SIZE":
      let sizes;
      if (state.selectedSize?.includes(action.payload)) {
        sizes = state.selectedSize?.filter((item) => item !== action.payload);
      } else {
        sizes = [...state.selectedSize, action.payload];
      }
      return {
        ...state,
        selectedSize: sizes,
      };

    case "FILTER_BY_GENDER":
      let genders;
      if (state.selectedGender?.includes(action.payload)) {
        genders = state.selectedGender?.filter(
          (item) => item !== action.payload
        );
      } else {
        genders = [...state.selectedGender, action.payload];
      }
      return {
        ...state,
        selectedGender: genders,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        selectedBrand: [],
        selectedSize: [],
        selectedGender: [],
        sortBy: null,
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    productlist: productData.products,
    selectedBrand: [],
    selectedSize: [],
    selectedGender: [],
    sortBy: null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
