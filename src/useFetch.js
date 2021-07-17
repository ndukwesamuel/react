import { useEffect, useState } from "react";



const useFetch = (url) => {

    const abortCont =  new AbortController();

    const [data, setData] = useState(null);
    const [ispending, setIsPending] = useState(true);
    const [error, setError]  = useState(null);



useEffect( () => {
    // console.log('samheart');
    // console.log(blogs);

    setTimeout( () => {

        // this will help us slow the time it will load                        
                fetch(url, { signal: abortCont.signal}) 

                .then( (res) => {
                    // this was add to check erros 
                    if (!res.ok) {
                        //    what we mean is that if res is not ok then log an erro
                        // but we are trowing the error
                        throw Error('we did not see anything ooo')
                        // this will trow and errro 
                    }
                    console.log(res);// if you lo
                    return res.json();// the retun has been here since
                })
                .then((data) => {
                    console.log(data);
                    setData(data) 
                    setIsPending(false)


                    // then we want to set the errro to null if every thing is working when we relod
                    setError(null)
                },)

                .catch((err) => {
                // and also we want to change the  ispending when we have an error
                // setIsPending(false)
                    // console.log(err.message);
                    // setError(err.message)

                    if (err.name === "AbortError") {
                        console.log('fetch aborted');
                    }
                    else{
                        setIsPending(false)
                        setError(err.message)
                    }


                })
    // we will set the second argument 
    }, 1000);

    return () => abortCont.abort();

            // this was add to cleanup the use state when ever the dom is unmounted
}, [url])
    return {data, ispending, error}
}
 
export default useFetch;



