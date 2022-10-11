import React, { useState } from 'react'

const LandingPage = () => {
    const [data, setData] = useState([])
    const [key, setKey] = useState("")
    const handleClick = async () => {
        const jsonData = await fetch("http://localhost:8000/api/post?key=" + key)
        const data = await jsonData.json()
        if (data.status == "success") {
            setData(data.data)
        }
        console.log(data);
    }

    return (
        <>
            <div><input type="text" value={key} onChange={e => setKey(e.target.value)} /> <button onClick={handleClick}>Submit</button></div>
            <div className='parent'>
                {data.map(ele => (
                    <div className='child'>
                        <div>{ele.companyId}</div>
                        <div>{ele.primaryText}</div>
                        <div>{ele.headline}</div>
                        <div>{ele.description}</div>
                        <div>{ele.CTA}</div>
                        <div> <img src={ele.imageUrl} alt={ele.headline} /></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LandingPage
