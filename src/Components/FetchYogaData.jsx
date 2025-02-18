import React from 'react'
import UseFetch from './UseFetch'
import'./FetchData.css'
function FetchYogaData(){
    const [data] =UseFetch('https://api.npoint.io/4459a9a10e43812e1152')
    console.log(data)
    return(<>
    <ul className='list_data_main'>
    <h1 className='usefetch_heading'>Fetch Yoga Data</h1>
          {data && data.map((e)=>(
      <>
      <li className='list_data'>
        <h3>{e.name}</h3>
        <p><strong>benefits:</strong>{e.benefits}</p>
        <p><strong>Time Duration</strong>{e.time_duration}</p>
      </li>
      </>
    ))}
    </ul>
    </>)
}
export default FetchYogaData