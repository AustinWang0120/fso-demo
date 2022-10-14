import { useState } from "react"

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({ counter }) => <div>{counter}</div>

const History = ({ allClicks }) => {
    if (allClicks.length === 0) {
        return <div>no reset</div>
    }

    return <div>{allClicks.join(" ")}</div>
}

const App = () => {
    const [counter, setCounter] = useState(0)
    const [allClicks, setAllClicks] = useState([])

    const handleIncrease = () => setCounter(counter + 1)
    const handleDecrease = () => setCounter(counter - 1)
    const handleReset = () => {
        setCounter(0)
        setAllClicks(allClicks.concat("reset"))
    }
    const handleHello = (name) => () => console.log("hello", name)

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={handleIncrease} text="plus" />
            <Button onClick={handleDecrease} text="minus" />
            <Button onClick={handleReset} text="reset" />
            <Button onClick={handleHello("austin")} text="austin" />
            <Button onClick={handleHello("potato")} text="potato" />
            <History allClicks={allClicks} />
        </div>
    )
}

export default App
