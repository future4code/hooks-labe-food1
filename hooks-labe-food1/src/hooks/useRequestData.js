import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)
  const [isLoading, setISLoading] = useState(false)

  useEffect(() => {
    setISLoading(true)
    axios.get(url , {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
        setISLoading(false)
      })
      .catch((error) => {
        alert('Ocorreu um erro, tente novamente')
        setISLoading(false)
      })
  }, [])

  return {data, setData, isLoading}
  
}

export default useRequestData