// @flow
export type ProductType = {
  id: number,
  name: string,
  owner: string,
  price: number,
  image: string,
};

export type ProductsType = ProductType[];

export type ChatType = {
  id?: number,
  sender: string,
  message: string,
  time: string,
};

export type ChatsType = ChatType[];

export type ButtonPropTypes = {
  label: string,
  handleClick: Function,
};
