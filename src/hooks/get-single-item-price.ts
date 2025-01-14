import { CartItemPrice } from "../types";

export const getSingleItemPrice = (i: CartItemPrice): number => {
  const variation = i.item.variations[i.variationId - 1];
  const price = variation.onSale ? variation.sale : variation.price;

  return i.quantity * price;
};
