import { useState } from "react"
import { useFormik } from "formik"
import { useHistory } from "react-router-dom"
import api from "../../services/api/api"
import "./index.scss"

export const AddMovie = () => {
  const history = useHistory()
  const [sucess, setSucess] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = async (values) => {
    const { ...data } = values

    const response = await api.post("/movies", data)
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
      <h1>Add New Movie</h1>
      <form className="x_formData" onSubmit={formik.handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Movie title"
          name="title"
          required
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <label>Synopsis</label>
        <input
          type="text"
          placeholder="Synopsis"
          name="synopsis"
          required
          value={formik.values.synopsis}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <label>Genre</label>
        <input
          type="text"
          placeholder="Genres"
          name="genre"
          required
          value={formik.values.genre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <label>Language</label>
        <input
          type="text"
          placeholder="Movie Languages"
          name="language"
          required
          value={formik.values.language}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <label>Subtitled</label>
        <input
          type="text"
          placeholder="Yes or No"
          name="subtitled"
          required
          value={formik.values.subtitled}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <label>Director</label>
        <input
          type="text"
          placeholder="Director's name"
          name="director"
          required
          value={formik.values.director}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <label>IMDB LINK</label>
        <input
          type="text"
          placeholder="Link to IMDB"
          name="imdb"
          required
          value={formik.values.imdb}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <label>Rating</label>
        <input
          type="text"
          placeholder="Movie Rating"
          name="rating"
          required
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />

        <button className="x_sendButton" type="submit">Add</button>
      </form>
    </section>
  )
}
