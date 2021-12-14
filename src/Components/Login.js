import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Design/Login.css'

export default function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    async function handleSubmit() {
        await axios.post('http://localhost:8000/signin', {
            username: username,
            password: password
        }).then((res) => {
            if (res.status === 200) {
                sessionStorage.setItem("name",res.data.name)
                sessionStorage.setItem("id",res.data._id);
                navigate('/products')
            }
            navigate('/products')
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <Container className='my-container'>
                <Row>
                    <Col><h1 className='display-1'>Login</h1></Col>
                </Row>
                <Row className='my-5'>
                    <Col lg={{ offset: 4, span: 1 }}>
                        <label >Username</label>
                    </Col>
                    <Col lg={1}>
                        <input className='my-input' type="username" name='username' value={username}
                            onChange={(e) => setusername(e.target.value)}></input>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col lg={{ offset: 4, span: 1 }}>
                        <label >Password</label>
                    </Col>
                    <Col lg={1}>
                        <input className='my-input' type="password" name='password' value={password}
                            onChange={(e) => setpassword(e.target.value)}></input>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col lg={{ offset: 4, span: 2 }}>
                        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
