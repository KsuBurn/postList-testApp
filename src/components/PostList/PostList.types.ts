export type PostListType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type UserListType = {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type ResultPostListType = {
  body: string;
  title: string;
  name: string;
  username: string;
};
