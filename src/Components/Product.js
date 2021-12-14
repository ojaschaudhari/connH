import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductPage from './ProductPage'
import Pagination from './Pagination'
import { useNavigate } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'
import StoreProduct from './StoreProduct'

export default function Product() {
    const [items, setitems] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [prodPerPage] = useState(2)
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    const indexOfLastProd = currentPage * prodPerPage
    const indexOfFirstProd = indexOfLastProd - prodPerPage
    const currentProd = items.slice(indexOfFirstProd, indexOfLastProd)
    const paginate = (pageNum) => setcurrentPage(pageNum)

    useEffect(() => {
        const getItems = async () => {
            setloading(true)
            await axios.get('http://localhost:8000/products').then((res) => {
                setitems(res.data)
                setloading(false)
            }).catch((err) => {
                console.log(err);
            })
        }

        getItems();
    }, [])

    function handleClick() {
        sessionStorage.removeItem("name")
        navigate('/')
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='d-flex float-end'>
                            <span className='name'>{sessionStorage.getItem("name")}</span>
                            <StoreProduct></StoreProduct>
                            <button className='btn btn-primary outline-success store'
                                onClick={handleClick}>Logout</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col><h1 className='display-1'>Product </h1></Col>
                </Row>
                <Row>
                    <Col>
                        <ProductPage items={currentProd} loading={loading}></ProductPage>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Pagination prodPerPage={prodPerPage} totalProd={items.length} paginate={paginate}></Pagination>
                    </Col>
                </Row>
            </Container>
        </>
    )
}