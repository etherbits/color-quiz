import React from 'react'

const Result = ({ score, colorDataLength, handleResetClick }) => {
    return (
        <>
            <span className='result'>
                You got {score}/{colorDataLength} right!
            </span>
            <button className='reset' onClick={handleResetClick}>
                restart
            </button>
        </>
    )
}

export default Result
