import React, {FC} from 'react';
import {
  Post,
  UserName,
  NickName,
  PostTitle,
} from '../styledComponents';

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
