import React from 'react'

const Quiz = ({ colorData, stage, handleColorClick }) => {
    return (
        <>
            <div
                style={{
                    width: '500px',
                    height: '500px',
                    backgroundColor: colorData[stage].color,
                }}
            />
            <ul className='answers'>
                {colorData[stage].answers.map((answer) => (
                    <li key={answer}>
                        <button onClick={() => handleColorClick(answer)}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Quiz
