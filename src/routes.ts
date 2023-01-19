import { getTODO, itsWorks } from "@controllers/todo"
import { movies, postMovie, userLogin } from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", movies)
  app.get("/login", userLogin)
  app.post("/movie", postMovie)
}
