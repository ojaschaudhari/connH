import React from 'react'

export default function Pagination({ prodPerPage, totalProd, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProd / prodPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {pageNumbers.map((number) => (
                        <li className="page-item" key={number}>
                            <span onClick={() => paginate(number)} className="page-link" href="#"> {number} </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
