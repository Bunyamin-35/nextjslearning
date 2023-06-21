import React from 'react'

const Blog = ({params}) => {
  console.log(params);
  return (
    <div>Blog : {params.blog}</div>
  )
}

export default Blog;