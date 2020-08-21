import React, {FC} from 'react';
import PostItem from '../PostItem/PostItem';
import {ResultPostListType} from './PostList.types';

type PostsType = {
  posts: ResultPostListType[];
}
const PostList: FC<PostsType> = ({posts}: PostsType) => {

  return (
    <>
      {
        posts.map((item: ResultPostListType, index) => (
          <div key={index}>
            <PostItem
              body={item.body}
              title={item.title}
              name={item.name}
              username={item.username}
            />
          </div>
        ))
      }
    </>
  );
};

export default PostList;
