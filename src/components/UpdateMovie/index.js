import { useState } from "react"
import { useFormik } from "formik"
import { useHistory, useParams } from "react-router-dom"
import api from "../../services/api/api"
import "./index.scss"

export const UpdateMovie = () => {
    const history = useHistory()
    const { id } = useParams()
    const [sucess, setSucess] = useState(null)
    const [error, setError] = useState(null)

    const onSubmit = async (values) => {
        const { ...data } = values

        const response = await api.put(`/movies/${id}`, data)
            .catch((err) => {
                if (err && err.response) {
                    setError(err.response.data.message)
                    setSucess(null)
                }
            })
        if (response && response.data) {
            setError(null)
            setSucess(response.data.message)
            history.push("/")
        }

    }

    const formik = useFormik({
        initialValues: { title: "", synopsis: "", genre: "", language: "", subtitled: "", director: "", imdb: "", rating: "" },
        validateOnBlur: true,
        onSubmit,
    })

    return (
        <section className="x_addMovie">
            <h1>Update Movie</h1>
            <form className="x_formData" onSubmit={formik.handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    placeholder="New Title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <label >Synopsis</label>
                <input
                    type="text"
                    placeholder="New Synopsis"
                    name="synopsis"
                    value={formik.values.synopsis}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <label >Genre</label>
                <input
                    type="text"
                    placeholder="New Genre"
                    name="genre"
                    value={formik.values.genre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <label >Language</label>
                <input
                    type="text"
                    placeholder="New Language"
                    name="language"
                    value={formik.values.language}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <label >Subtitled</label>
                <input
                    type="text"
                    placeholder="Yes or No"
                    name="subtitled"
                    value={formik.values.subtitled}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <label >Director</label>
                <input
                    type="text"
                    placeholder="New Director"
                    name="director"
                    value={formik.values.director}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <label >IMDB LINK</label>
                <input
                    type="text"
                    placeholder="Link to IMDB"
                    name="imdb"
                    value={formik.values.imdb}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <label >Rating</label>
                <input
                    type="text"
                    placeholder="New Rating"
                    name="rating"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />

                <button className="x_sendButton" type="submit">Update</button>
            </form>
        </section>
    )
}
