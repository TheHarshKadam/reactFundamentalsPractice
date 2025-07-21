import React, { useState } from 'react'

export default function Pagination({ lst, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lst.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentItems);
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(lst.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <h1>Pagination</h1>

      <ul>
        {currentItems.map((lst, index) => {
          return <li key={index}>
            {lst}
          </li>
        })}
      </ul>
      {pageNumbers.map((number) => {
        return <li key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </li>
      })}
    </div>
  )
}
