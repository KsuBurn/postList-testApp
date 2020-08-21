import React, {FC, useEffect, useState} from 'react';
import PostList from '../PostList/PostList';
import {Input} from '../styledComponents';
import {searchPost} from '../../utils/searchPost';
import {
  PostListType,
  ResultPostListType,
  UserListType
} from '../PostList/PostList.types';
import {useResultPostList} from '../../hooks/useResultPostList';
import {requestData} from '../../utils/requestData';
import style from './App.module.css';

const App: FC = () => {
  const [postList, setPostList] = useState<PostListType[]>([]);
  const [userList, setUserList] = useState<UserListType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const result = useResultPostList(postList, userList);
  const [posts, setPosts] = useState<ResultPostListType[]>([]);

  const [postCount, setPostCount] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const posts = await requestData<PostListType[]>('https://jsonplaceholder.typicode.com/posts');
      const users = await requestData<UserListType[]>('https://jsonplaceholder.typicode.com/users');

      setPostList(posts);
      setUserList(users);
    };

    getData();
  }, [])

  useEffect(() => {
    setPosts(result);
  }, [result])

  useEffect(() => {
    window.addEventListener('scroll', (e)=> {
      const postPage = document.getElementById('root');
      if (postPage != null) {
        if (Math.round(postPage.scrollHeight - window.scrollY) === window.innerHeight) {
          setPostCount((postCount) => postCount + 10)
        }
      }
    });
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setInputValue(value);

    const filteredPosts = searchPost(value, result);
    setPosts(filteredPosts);
  };

  return (
    <div className={style.wrap}>
      <Input
        placeholder='Поиск'
        type='text'
        value={inputValue}
        onChange={handleChange}
      />
      <PostList posts={posts} postCount={postCount}/>
    </div>
  );
};

export default App;
