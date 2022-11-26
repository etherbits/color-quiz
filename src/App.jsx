import { useState, useEffect } from 'react'
import './App.css'
import Quiz from './components/Quiz.jsx'
import Result from './components/Result.jsx'

function App() {
    const [colorData, setColorData] = useState(null)
    const [stage, setStage] = useState(0)
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetch('https://random-colors-lovat.vercel.app/')
            .then((res) => res.json())
            .then((data) => setColorData(data))
    }, [])

    const handleResetClick = () => {
        setStage(0)
        setScore(0)
        setColorData(null)
        fetch('https://random-colors-lovat.vercel.app/')
            .then((res) => res.json())
            .then((data) => setColorData(data))
    }

    const handleColorClick = (submittedColor) => {
        if (submittedColor === colorData[stage].color) {
            setScore(score + 1)
        }
        setStage(stage + 1)
    }

    return (
        <div className='app'>
            <h1 className='title'>QUIZ APP</h1>
            {colorData && (
                <>
                    {stage < colorData.length ? (
                        <Quiz
                            colorData={colorData}
                            stage={stage}
                            handleColorClick={handleColorClick}
                        />
                    ) : (
                        <Result
                            score={score}
                            colorDataLength={colorData.length}
                            handleResetClick={handleResetClick}
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default App
