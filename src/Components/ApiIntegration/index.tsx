import axios from 'axios';
import React, { useEffect } from 'react'

const ApiIntegration = () => {


  const getData = async () => {
    try {
       axios.get('https://jsonplaceholder.typicode.com/todos')
       .then(response => {
          console.log(response);
       }).catch(error => console.error(error)
       )
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  })

  return (
    <div>
      ApiIntegration
    </div>
  )
}

export default ApiIntegration
