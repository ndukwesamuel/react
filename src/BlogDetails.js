
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const {id} = useParams();
  const {data:blogs, ispending, error} =   useFetch("http://localhost:8000/blogs/" + id)
  const history = useHistory()


  const handelDelete = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
        method: 'DELETE'
    }).then( () => {
      history.push('/');
    })
  }


  return (
  
    <div className="blog-details">

      {ispending && <div> looading pls wait </div>}
      {error &&  <div> {error} </div>}

      {blogs && (
        <section>
            <h1>{blogs.title}</h1>
            <p>{blogs.body}</p>

            <button onClick={handelDelete}> delete</button>
        </section>
      )}
     

    </div>
  );
}
 
export default BlogDetails;


