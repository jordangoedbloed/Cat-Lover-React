export type kittyType = {
  _id: string;
  _links: linksType;
  breed: string;
  color: string;
  name: string;
  img: string;
};

export interface linksType {
  collection: {
    href: string;
  };
  self: {
    href: string;
  };
}
