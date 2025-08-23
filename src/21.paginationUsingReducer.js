import React, { useEffect, useReducer } from 'react'

const itemsPerPage = 5;

const paginationRedcuer = (state, action) => {
    switch (action.type) {
        case 'SET_TOTAL_ITEMS':
            return { ...state, totalItem: action.payLoad }

        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payLoad }
        default:
            return { ...state }
    }
}

export default function PaginationUsingReducer() {

    const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);
    //console.log(data)
    const [paginationState, dispatch] = useReducer(paginationRedcuer,
        {
            currentPage: 1,
            totalItem: 0
        }
    )
    useEffect(() => {
        dispatch({ type: 'SET_TOTAL_ITEMS', payLoad: data.length });
    }, []);

    const startIndex = (paginationState.currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const displayedItems = data.slice(startIndex, endIndex);

    const handlePageClick = (newPage) => {
        dispatch({ type: 'SET_CURRENT_PAGE', payLoad: newPage })
    }

    return (
        <div>
            <h1>Pagination Using Reducer</h1>
            <ul>
                {displayedItems.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageClick(paginationState.currentPage - 1)} disabled={paginationState.currentPage === 1}>Previous</button>
                <button onClick={() => handlePageClick(paginationState.currentPage + 1)} disabled={endIndex >= data.length}> Next</button>
            </div>
        </div>

    )
}
