import { Table } from "../Table/Table"
import useGetMovieData from "../../hooks/useGetMovieData"

export const ListMovies = () => {
    const { data } = useGetMovieData()
    return (
        <Table
            tableData={data}
            headersData={["Title", "Synopsis", "Genre", "Language", "Subtitled", "Director", "Rating", "IMDB", "Edit/Delete"]}
        />
    )
}
