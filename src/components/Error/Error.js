import React, { useEffect } from "react";
import networkErrorLottie from "../../resources/network-error.json"
import lottie from "lottie-web";

function Error() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#page-error"),
            animationData: networkErrorLottie
        });
    }, [])

    return (
        <>
            <div id="page-error" />
            <div id="error-msg">Something went wrong</div>
        </>
    );
}

export default Error;