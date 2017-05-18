// @flow
export type ChatType = {
  id?: number,
  sender: string,
  message: string,
  time: string,
};

export type ChatsType = ChatType[];

export type ProductType = {
  id: number,
  name: string,
  owner: string,
  price: number,
  image: string,
};

export type ProductsType = ProductType[];

export type CartType = {
  id: number,
  name: string,
  owner: string,
  price: number,
  image: string,
  quantity: number,
};

export type CartsType = CartType[];

export type ButtonPropTypes = {
  label: string,
  handleClick: Function,
};
