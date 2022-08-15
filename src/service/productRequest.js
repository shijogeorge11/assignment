import axios from "axios";
export default function service(signal, query, pageNumber) {
    return axios({
        method: "GET",
        url: "https://www.blibli.com/backend/search/products",
        params: { searchTerm: !query ? "samsung" : query, start: pageNumber, itemPerPage: 24 },
        signal: signal
    })
}