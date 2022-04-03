import React, { useContext } from 'react';
import { Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import { BlogConext } from '../../App';

const Blogs = (props) => {
   
    const { admin, blog, imageURL, title,_id } = props.blog;

    const navigate=useNavigate();

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {blog.length > 100 ? blog.slice(0, 170) : blog};
                        </Card.Text>
                    </Card.Body>

                    <Button onClick={()=>navigate('/blog/'+_id)} variant="primary">Primary</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Blogs;