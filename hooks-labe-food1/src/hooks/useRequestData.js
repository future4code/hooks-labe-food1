import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response)
        // console.log(response)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [])

  return [data, setData]
}

export default useRequestData