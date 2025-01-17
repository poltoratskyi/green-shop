export type Id = {
  id: number;
};

export type Image = {
  imgUrl: string;
};

export type ItemId = {
  itemId: number;
};

export type SizeId = {
  sizeId: number;
};

export type ItemCategory = Id & Name & {};

export type Name = {
  name: string;
};

export type Price = {
  price: number;
  sale: number;
  onSale: boolean;
};

export type Quantity = {
  quantity: number;
};

export type ShortName = {
  shortName: string;
};

export type FullName = {
  fullName: string;
};

export type Sku = {
  sku: string;
};

export type Tags = {
  tags: string;
};

export type Token = {
  token: string;
};

export type UserId = {
  userId: number;
};
