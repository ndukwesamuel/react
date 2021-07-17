import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Bloglist = (props) => {
    const blogs = props.blogs
    const handleDelete = props.handleDelete



    return (  



        <section className="Bloglist">
           <div className="blog">
                    {blogs.map(
                        (blog) => (
                            <div className='cc' key={blog.id}>
                                    <Link to={`/blogs/${blog.id}`} > 
                                    <h2><span> {blog.id}</span> {blog.title}</h2>
                                    <p>{blog.body}</p>
                                    <h3>{blog.author}</h3>
                                    </Link> 
                            </div>
                        )
                    )}
                </div> 
        </section>
    );
}
 
export default Bloglist;