import React, { useCallback, useRef } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import locationIcon from "../../resources/location.svg"
import ratingIcon from "../../resources/rating.svg"

function ProductCard(props) {
    const product = props["productData"];
    const index = props["productIndex"];
    const productCount = props["productCount"];

    const carouselOptions = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const observer = useRef();
    const lastProductObserver = useCallback(node => {
        if (props.loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                props.setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [props.loading]);

    function addToCart(event){
        alert("Product Added to Cart");
    }

    return (
        <Card className="card-layout" >
            <div className="slick-container">
                <Slider {...carouselOptions}>
                    {product["images"].map((item, index) => (
                        <div key={index} className="product-img"><img className="product-image" src={item} alt="product" /></div>
                    ))}
                </Slider>
            </div>
            <div className="product-name-wrapper">
                <span className="product-name">{product["name"]}</span>
            </div>
            <div className="discounted-price">
                {product["price"]["priceDisplay"]}
            </div>
            {
                product["price"]["strikeThroughPriceDisplay"] ?
                    <div>
                        <span className="product-price">{product["price"]["strikeThroughPriceDisplay"]}</span>
                        <span className="discount-percentage">{`${product["price"]["discount"]}%`}</span>
                    </div>
                    : ""
            }
            <div className="location-wrapper">
                <img src={locationIcon} alt="location" />
                <span>{product["location"]}</span>
            </div>
            <div className="rating-wrapper">
                <img src={ratingIcon} alt="rating" />
                <span>{product["review"]["absoluteRating"]}</span>
                <span className="rating-count">{`(${product["review"]["count"]})`}</span>
            </div>
            <div className="button-wrapper">
                {productCount === index + 1
                    ? <Button ref={lastProductObserver} variant="primary" className="cart-button" onClick={addToCart}>Add to cart</Button>
                    : <Button variant="primary" className="cart-button" onClick={addToCart}>Add to cart</Button>}
            </div>
        </Card>

    )
}

export default ProductCard;