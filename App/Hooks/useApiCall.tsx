import { useEffect, useState } from 'react'

const useApiCall = (loadDataApi: Function) => {
  const [responseData, setResponseData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const loadData = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      const data: any = await loadDataApi()
      setResponseData(data)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  return { responseData, isLoading, isError, refresh: loadData }
}

export default useApiCall
