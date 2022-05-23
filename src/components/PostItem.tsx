import React from 'react'
import { IPost } from "../models/IPost";

type PostItemProps = {
  post: IPost;
}

function PostItem({ post }: PostItemProps) {
  return (
    <div className='post'>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <button>Delete</button>
    </div>
  )
}

export default PostItem