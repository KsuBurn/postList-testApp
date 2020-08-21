import React, {FC, useEffect, useState} from 'react';
import PostList from '../PostList/PostList';
import {Input} from '../Input/Input';
import {searchPost} from '../../utils/searchPost';
import {PostListType, ResultPostListType, UserListType} from '../PostList/PostList.types';
import {useResultPostList} from '../../hooks/useResultPostList';
import {requestData} from '../../utils/requestData';

const App: FC = () => {
  const [postList, setPostList] = useState<PostListType[]>([]);
  const [userList, setUserList] = useState<UserListType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const result = useResultPostList(postList, userList);
  const [posts, setPosts] = useState<ResultPostListType[]>([]);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setInputValue(value);

    const filteredPosts = searchPost(value, result);
    setPosts(filteredPosts);
  };

  return (
    <div style={{margin: 'auto', width: 500}}>
      <Input
        placeholder='Поиск'
        type='text'
        value={inputValue}
        onChange={handleChange}
      />
      <PostList posts={posts}/>
    </div>
  );
};

export default App;
