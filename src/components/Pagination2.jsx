import React from 'react'

const Pagination = ({
  totalPages,
  currentPage,
  postsPerPage,
  handlePagination,
}) => {
  const paginationNumbers = []

  for (let i = 1; i <= Math.ceil(totalPages / postsPerPage); i++) {
    paginationNumbers.push(i)
  }

  return (
    <div className="pagination">
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={currentPage === pageNumber ? 'active' : ''}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

export default Pagination
