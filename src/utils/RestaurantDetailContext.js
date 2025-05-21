import { createContext } from "react";

const RestaurantDetailContext = createContext({
  selectedCardDetails: {},
  groupCards: [],
});

export default RestaurantDetailContext