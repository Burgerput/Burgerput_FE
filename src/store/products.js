import { create } from "zustand";

const useCustomProductsStore = create((set) => ({
  products: [],
  actions: {
    addProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    deleteProduct: (id) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      })),
    resetProducts: () => set({ products: [] }),
  },
}));

export const useCustomProducts = () =>
  useCustomProductsStore((state) => state.products);

export const useCustomProductsActions = () =>
  useCustomProductsStore((state) => state.actions);

export const useResetCustomProducts = () =>
  useCustomProductsStore((state) => state.actions.resetProducts);
