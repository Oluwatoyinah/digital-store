import React from 'react'

const PaginationOld = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers)
  return (
    <nav>
        <ul className="pagination justify-content-end">
            {/* {pageNumbers.map(number => {
                <li key={number} className="page-item">
                    <a href="!#" className='page-link'>{number}</a>
                </li>
            })} */}
            {pageNumbers.map(number => <li key={number} className='page-item'><a href="" onClick={() => paginate(number)} className='page-link'>{number}</a></li>)}
            {/* {pageNumbers.filter(number  => number <= 20)} */}
        </ul>
    </nav>
  )
}

export default PaginationOld