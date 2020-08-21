import React, {FC, useState} from 'react';
import {
  Post,
  UserName,
  NickName,
  PostTitle,
} from '../styledComponents';
import style from './PostItem.module.css';
import {Like} from '../styledComponents/Like/Like';
import like from '../../img/like.svg';
import likeActive from '../../img/like-active.svg';

type PostItemType = {
  body: string;
  title: string;
  name: string;
  username: string
};

const PostItem: FC<PostItemType> = ({body, title, name, username}: PostItemType) => {

  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  }

  return (
    <Post>
      <div className={style.userName}>
        <UserName>{name}</UserName>
        <span>&ensp;aka&ensp;</span>
        <NickName>{username}</NickName>
      </div>
      <PostTitle>{title}</PostTitle>
      <p>{body}</p>
      <div className={style.likeWrap}>
        <Like
          src={liked ? likeActive : like}
          onClick={() => handleClick()}
        />
      </div>
    </Post>
  );
};

export default PostItem;
