import { Table } from "../../Table/Table"
import useGetMovieData from "../../../hooks/useGetMovieData"

export const ListMovies = () => {
    const { loading, error, data } = useGetMovieData()
    return (
        <Table
            tableData={data}
            headersData={["Title", "Synopsis", "Genre", "Language", "Subtitled", "Director", "IMDB", "Rating"]}
        />
    )
}
