import {useEffect, useState} from 'react';
import {
  PostListType,
  UserListType,
  ResultPostListType
} from '../components/PostList/PostList.types';

export const useResultPostList = (postList: PostListType[], userList: UserListType[]): ResultPostListType[] => {

  const [resultPostList, setResultPostList] = useState<ResultPostListType[]>([]);

  useEffect(() => {
    postList.map(post => {
      userList.map(user => {
        if (post.userId === user.id) {
          const postItem = {
            body: post.body,
            title: post.title,
            name: user.name,
            username: user.username,
          };
          setResultPostList(resultPostList => [...resultPostList, postItem])
        }
      });
    });
  }, [postList, userList])

  return resultPostList;
};
