import axios from "axios";
import { useEffect, useState } from "react";
import service from "./productRequest";

export default function useProductSearch(query, pageNumber) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    // const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setProducts([]);
    }, [query])

    useEffect(() => {
        setLoading(true);
        setError(false);
        const controller = new AbortController();
        const signal = controller.signal;
        service(signal, query, pageNumber)
            .then(responseData => {
                setProducts(prevProducts => {
                    console.log("prodicts search");
                    console.log(responseData["data"]["data"]["products"]);
                    if (responseData["data"]["data"] && responseData["data"]["data"]["products"] && responseData["data"]["data"]["products"].length > 0)
                        return [...prevProducts, ...responseData["data"]["data"]["products"]];
                    else
                        return prevProducts;
                });
                setLoading(false);
            })
            .catch(e => {
                if (axios.isCancel(e))
                    return
                setError(true);
                setLoading(false);
            })
        return () => controller.abort();
    }, [query, pageNumber]);


    return { loading, error, products };
}