import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
function Product() {
    const [loading,setLoading] = useState(false);
    const[data,setData] = useState([]);
    useEffect(()=>{
        setLoading(true);
        axios({
            url:"http://localhost:3000/product",
            method:"GET"
        }).then((res)=>{
            setData(res.data);
            setLoading(false)
        }).catch((err)=>{
            console.log(err);
        })

    },[])
  return (<div >
    <div style={{margin:"2rem 0rem"}}>Product page</div>
    {loading && <div>loading...</div>}
    <div className='tablecontainer'>
            <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>More Detail</th>
        </tr>
        {
        data?.map((item)=>{
            return(    
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><Link to={`/products/${item.id}`}>more details</Link></td>
        </tr>
            )

        })
    }
        
        </table>

        </div>
    

  </div>
    
  )
}

export default Product