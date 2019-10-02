import React from 'react';

export default function Post({ post }) {
  return (
    <div className='post'>
      <p>&ldquo;{post.text}&rdquo;</p>
    </div>
  );
}
