import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Design/Product.css'

export default function ProductPage({ items, loading }) {

    const products = []
    function storeItems(e) {
        products.push(sessionStorage.getItem(sessionStorage.getItem("id")))
        products.push(e)
        sessionStorage.setItem(sessionStorage.getItem("id"), products)
    }


    if (loading) {
        return <h1 className='display-1'>Loading.....</h1>
    }
    else {
        return (
            <>
                <Container className='my-3'>
                    {items.map((item) => (
                        <Row key={item._id} className='p-items p-3'>
                            <Col lg={3}>
                                <span><img src={item.imgUrl} alt="" className='p-img my-2' /></span>
                            </Col>
                            <Col lg={3}>
                                <span className='my-2'>{item.name} </span>
                            </Col>
                            <Col lg={3}>
                                <span className='my-2'>{item.price} ₹</span>
                            </Col>
                            <Col lg={3}>
                                <button className='btn btn-primary my-2'
                                    onClick={(e) => storeItems(item.name)}
                                >Store this item</button>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </>
        )
    }
}
