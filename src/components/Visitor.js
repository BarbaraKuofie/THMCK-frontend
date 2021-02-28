import React, {useEffect, useState} from 'react'

const Visitor = () =>{
    const visitorInfo ={
        name: '',
        comment: ''
    }

    const [visitor, setVisitor] = useState(visitorInfo)
    // const [visitorReason, setVisitorReason] = useState("")
    const [visitorData, setVisitorData] = useState([])
 

    const addVisitor =(event)=>{
        event.preventDefault()
       
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(visitor)
        }
        fetch (`http://localhost:3000/api/v1/visitors`, reqObj)
        .then (resp => resp.json())
        .then(result => {
            if (result.error){
                console.log(result.error)
            }else {
                
                window.location.reload()
                console.log(result)
            }
        })
    }


 useEffect(()=>{
    fetch(`http://localhost:3000/api/v1/visitors`)
    .then (resp => resp.json())
    .then(result =>{
        setVisitorData(result)
    })
    .catch((error)=> console.log(error))
 }, [])
    return (
            <div>
            {visitorData.length > 0? 
            visitorData.map(visitor =>  
            <div key={visitor.id}>
             <h4>Welcome {visitor.name}!</h4>
             <p>{visitor.comment}</p>
          </div>
              )
                :
            null
            }   
            <div>
            <form onSubmit={(event)=>addVisitor(event)}>
                <label>
                    Your name?
                    <br />
                    <input 
                    type="text" 
                    name='visitorName'
                    onChange = {event => setVisitor({...visitor, name: event.target.value})}
                     />
                </label>
                <br />
                <label>
                    What brought you here?
                    <br />
                    <input
                    type="text"
                    name = 'visitorReason'
                    onChange = {event => setVisitor({...visitor, comment: event.target.value})}
                    />
                 <br />
                </label>
                <br />
                <input type="submit" value="Submit" />
                </form>
            </div>   
        </div>
    )
}

export default Visitor