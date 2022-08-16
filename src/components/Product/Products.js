import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from "../Header/Header";
import useProductSearch from "../../service/productsSearch";
import Skeleton from "../../skeleton/Skeleton";
import ProductCard from "../ProductCard/ProductCard";
import Error from "../Error/Error";


function Products(props) {

  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading,
    error,
    products
  } = useProductSearch(query, pageNumber);


  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <Header handleSearch={handleSearch} query={query} />
      <div className="products-layout">
        <Row xs={1} md={2} lg={4} className="g-4">
          {
            !loading && products && products.length > 0 ?
              products.map((product, index) => {
                return (
                  <Col key={index}>
                    <ProductCard productData={product} productIndex={index}
                      productCount={products.length}
                      loading={loading}
                      setPageNumber={setPageNumber} />
                  </Col>
                )
              })
              : ""
          }

          {
            loading
              ? Array.from(Array(24).keys()).map((i, k) => {
                return (
                  <Col key={k}>
                    <Skeleton />
                  </Col>
                );
              })
              : ""
          }
        </Row>

        {
          error ? <Error /> : ""
        }
      </div>
    </>

  );
}

export default Products;
