import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { BlogConext } from '../../App';
import Blogs from '../Blogs/Blogs';




const Home = () => {
    const [blogs, setBlogs] = useContext(BlogConext);
console.log("fomr home", blogs)
    useEffect(() => {
        fetch('https://retro-tech-talks.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <BlogConext.Provider value={[blogs, setBlogs]}>
            <div>
                <h3>this is home</h3>

                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            blogs.map(blog => <Blogs
                                key={blog._id}
                                blog={blog}
                            ></Blogs>)
                        }
                    </Row>
                </Container>
            </div>
        </BlogConext.Provider>
    );
};

export default Home;