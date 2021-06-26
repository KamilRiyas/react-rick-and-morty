import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setIsError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Unable to reach the API');
                }
                return res.json();
            })
            .then(data => {
                setIsError(null)
                setData(data);
                setIsPending(false);
            })
            .catch((e) => {
                if (e.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsError(e.message);
                    setIsPending(false);
                }
            })
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;