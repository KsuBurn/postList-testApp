import {ResultPostListType} from '../components/PostList/PostList.types';

export const searchPost = (value: string, result: ResultPostListType[]): ResultPostListType[] => {
  const matchesFilter = new RegExp(value, 'i');

  const filterPosts = result.filter((item) => {
    return !value || matchesFilter.test(item.title)
  })

  return filterPosts;
};
