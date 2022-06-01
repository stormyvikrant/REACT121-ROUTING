import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
 

function ProductDetail() {
    const [loading,setLoading] = useState(false);
    const[data,setData] = useState([]);
    const params = useParams();
    const { id } = params;
    useEffect(()=>{
        setLoading(true);
        
        axios({
            url:`http://localhost:3000/product/${id}`,
            method:"GET"
        }).then((res)=>{
            setData(res.data);
            setLoading(false)
        }).catch((err)=>{
            console.log(err);
        })

    },[id])
    // console.log(params);
  return (<>
    {loading && <div>loading...</div>}
    
    <div className='tablecontainer'>
            <table>
        <tr >
            <th style={{border:"1px solid green"}} >Name</th>
            <th style={{border:"1px solid green"}}>Price</th>
            
        </tr>
        {
        
        <tr >
            <td style={{border:"1px solid green"}}>{data.name}</td>
            <td style={{border:"1px solid green"}}>{data.price}</td>
        </tr>
           }
        
        </table>

        </div>

    
  </>)
}

export default ProductDetail
