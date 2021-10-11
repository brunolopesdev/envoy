import { useEffect, useState } from "react"
import api from "../services/api/api"

const useGetMovieData = () => {
    const [data, setData] = useState()

    useEffect(() => {
        api.get("/movies").then((response) => {
            setData(response.data)
        })

    }, [])

    async function deleteTransaction(id) {
        await api.delete(`/movies/${id}`)
        setData(data.filter((value) => {
            return value.id != id
        }))
        window.location.reload()
    }

    return { data, deleteTransaction }
}

export default useGetMovieData