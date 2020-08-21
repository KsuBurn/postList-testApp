import React, {FC} from 'react';
import PostItem from '../PostItem/PostItem';
import {ResultPostListType} from './PostList.types';

type PostsType = {
  posts: ResultPostListType[];
  postCount: number;
}
const PostList: FC<PostsType> = ({posts, postCount}: PostsType) => {

  return (
    <div>
      {
        posts.slice(0, postCount).map((item: ResultPostListType, index) => (
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
    </div>
  );
};

export default PostList;
