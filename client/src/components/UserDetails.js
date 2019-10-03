import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Post from './Post';

export default function UserDetails() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `http://webapi-iii-challenge-jyh.herokuapp.com/api/users/${id}/posts`,
      )
      .then(res => {
        // console.log(res.data);
        setPosts(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  console.log(posts[0]);

  return (
    <div className='user-details'>
      <h2>{posts[0] && posts[0].postedBy}</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
