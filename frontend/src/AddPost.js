import React, { useState } from 'react'

const AddPost = () => {
    const [companyId, setcompanyId] = useState("")
    const [primaryText, setprimaryText] = useState("")
    const [headline, setheadline] = useState("")
    const [description, setdescription] = useState("")
    const [CTA, setCTA] = useState("")
    const [imageUrl, setimageUrl] = useState("")

    const handleClick = async () => {
        const jsonData = await fetch("http://localhost:8000/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                companyId: companyId,
                primaryText: primaryText,
                headline: headline,
                description: description,
                CTA: CTA,
                imageUrl: imageUrl
            })
        })
        const data = await jsonData.json()
        if (data.status == "success") {
            setcompanyId("")
            setprimaryText("")
            setheadline("")
            setdescription("")
            setCTA("")
            setimageUrl("")
        }
        console.log(data);

    }
    return (
        <div className='addPost'>
            <div><span>companyId: </span>  <input type="text" value={companyId} onChange={e => { setcompanyId(e.target.value) }} /></div>
            <div><span>primaryText: </span> <input type="text" value={primaryText} onChange={e => { setprimaryText(e.target.value) }} /></div>
            <div><span>headline: </span> <input type="text" value={headline} onChange={e => { setheadline(e.target.value) }} /></div>
            <div><span>description: </span>  <input type="text" value={description} onChange={e => { setdescription(e.target.value) }} /></div>
            <div><span>CTA: </span> <input type="text" value={CTA} onChange={e => { setCTA(e.target.value) }} /></div>
            <div><span>imageUrl: </span> <input type="text" value={imageUrl} onChange={e => { setimageUrl(e.target.value) }} /></div>
            <div onClick={handleClick} ><button>Submit</button></div>
        </div>
    )
}

export default AddPost