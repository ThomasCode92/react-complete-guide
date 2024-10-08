import { initStore } from './store';

import DUMMY_PRODUCTS from '../products.json';

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex(
        product => product.id === productId,
      );

      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];

      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };

  initStore(actions, { products: DUMMY_PRODUCTS });
};

export default configureStore;
