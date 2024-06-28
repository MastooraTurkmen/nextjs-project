'use client';

import { useState } from "react"

const clientPage = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className="text-7xl">clientPage</h1>
            <button className="btn text-white btn-primary" onClick={() => setCount(count + 1)}>increase</button>
            <button className="btn text-white btn-secondary m-2">{count}</button>
        </div>
    )
}

export default clientPage