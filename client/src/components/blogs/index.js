import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'

function Index() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        Axios.get('/api/blogs')
        .then((results) => {
            setBlogs(results.data); //our blogs are under data
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div className="container">
            <header>
                <h1>Blogs</h1>
            </header>

            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { blogs.map(blog => (
                            <tr key={blog._id}>
                                <td>
                                    <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                                </td>
                                <td>{blog.status}</td>
                                <td>{blog.author && blog.author.firstName} {blog.author && blog.author.lastName}</td>
                                <td>
                                    <Link to={`/blogs/${blog._id}/edit`}>Edit</Link> |
                                    <Link to={`/blogs/destroy/${blog._id}`}> Delete</Link>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Index;