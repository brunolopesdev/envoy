import { Link } from "react-router-dom"
import useGetMovieData from "../../hooks/useGetMovieData"
import "./style.css"



export const Table = ({ tableData, headersData }) => {
	const { loading, error, data } = useGetMovieData()

	return (
		<main>
			<table className="table">
				<thead>
					<tr>
						{headersData.map(col => <th key={col}>{col}</th>)}
					</tr>
				</thead>
				<tbody>
					{!loading && error && <p>Carregando...</p>}
					{!loading && tableData?.map((el, index) =>
						<tr key={el.id}>
							<td data-label="Title">{el.title}</td>
							<td data-label="Synopsis">{el.synopsis}</td>
							<td data-label="Genre">{el.genre}</td>
							<td data-label="Language">{el.language}</td>
							<td data-label="Subtitled">{el.subtitled}</td>
							<td data-label="Director">{el.director}</td>
							<td data-label="IMDB Rating">{el.rating}</td>
							<td data-label="IMDB Link"><a href={el.imdb}>IMDB</a></td>
						</tr>
					)}
				</tbody>
			</table>
		</main>
	)
}

