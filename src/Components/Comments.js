import axios from "axios"
import { useEffect,useState } from "react"
const Comments=()=>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get(
            data 
            )
    })
   
    return(
        <>

        </>
    )
}
export default Comments;