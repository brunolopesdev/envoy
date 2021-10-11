import { Link } from "react-router-dom"
import useGetMovieData from "../../hooks/useGetMovieData"
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import "./style.scss"



export const Table = ({ tableData, headersData }) => {
	const { deleteTransaction } = useGetMovieData()

	return (
		<section>
			<table className="table">
				<thead>
					<tr>
						{headersData.map(col => <th key={col}>{col}</th>)}
					</tr>
				</thead>
				<tbody>
					{tableData && tableData?.map((el, index) =>
						<tr key={el.id}>
							<td data-label="Title">{el.title}</td>
							<td data-label="Synopsis">{el.synopsis}</td>
							<td data-label="Genre">{el.genre}</td>
							<td data-label="Language">{el.language}</td>
							<td data-label="Subtitled">{el.subtitled}</td>
							<td data-label="Director">{el.director}</td>
							<td data-label="IMDB Rating">{el.rating}</td>
							<td data-label="IMDB Link"><a href={el.imdb} target="_blank">IMDB</a></td>
							<td>
								<i><Link to={`/update-movie/${el.id}`}><FiEdit /></Link></i>
								<i><Link onClick={() => deleteTransaction(el.id)}><MdDelete /></Link></i>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</section>
	)
}

