import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogConext } from '../../App';

const BlogDetails = () => {
  

    const navigate=useNavigate();
    const {idName}=useParams();
   const [blogs]=useContext(BlogConext)
    const findBlog=blogs.find(blog=> blog._id==idName);
    console.log(findBlog)
    const {blog,imageURL,title,admin}=findBlog;
    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            <h2>{title}</h2>
            <img src={imageURL} alt="" />
            <p>{blog}</p>
        </div>
    );
};

export default BlogDetails;