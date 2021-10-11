import { useEffect, useState } from "react"
import api from "../services/api/api"


const useGetMovieData = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState()

    useEffect(() => {
        api.get("/movies").then((response) => {
            setError(null)
            setLoading(false)
            setData(response.data)

            console.log(response.data)
        }).catch((error) => {
            setLoading(false)
            setError(error.message)
            setData(null)
        })

    }, [])

    return { loading, error, data }
}

export default useGetMovieData