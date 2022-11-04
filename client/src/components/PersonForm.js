import { useEffect,useState} from 'react'
import axios from 'axios';
const PersonForm = ()=>{
    const [message, setMessage]= useState('Loading...')
    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))
        .catch(err=>console.log(err))
    },[])
    // START HERE you have an axios error with the post request
    const onSubmitHandler = (e)=> {
        e.preventDefault()
        // DONT FORGET YOUR // in the url
        axios.post('http://localhost:8000/api/people',{firstName,lastName})
        .then(res =>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>console.log({msg:'Posting Error',err:err}))
    }
    return (
        <>
        <div>
            <h2>Message from the backend:{message}</h2>
        </div>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" value={firstName} onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" value={lastName} onChange = {(e)=>setLastName(e.target.value)}/>
            </p>
            <button type="submit">Create Person</button>
        </form>
        <div>
            <p>firstname State: {firstName}</p>
            <p>lastname State: {lastName}</p>
        </div>
        </>
    )
}
export default PersonForm;