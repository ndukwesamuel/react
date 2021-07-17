import {  useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {

    const {data:blogs, isPendng, error}  = useFetch("http://localhost:8000/blogs");


    let title = 'n'
    // const handleDelete = (id) => {
    //     const NewBlog = blogs.filter( blogs => blogs.id  !== id )
    //     setBlogs(NewBlog)

    // }

    return (
        <section className="home">

            <h1> this is to show it working</h1>

                {error && <div> {error}</div>}
                {isPendng && <div> loading ....</div>}

             {blogs && <Bloglist blogs={blogs} title={title} />}


        </section>

      );
}
 
export default Home ;