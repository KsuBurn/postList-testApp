import React, {FC} from 'react';
import {PostTitle} from '../PostTitle/PostTitle';
import {UserName} from '../UserName/UserName';
import {NickName} from '../NickName/NickName';
import {Post} from '../Post/Post';

type PostItemType = {
  body: string;
  title: string;
  name: string;
  username: string
};

const PostItem: FC<PostItemType> = ({body, title, name, username}: PostItemType) => {

  return (
    <Post>
      <UserName>{name}</UserName>
      <NickName>{username}</NickName>
      <PostTitle>{title}</PostTitle>
      <p>{body}</p>
    </Post>
  );
};

export default PostItem;
