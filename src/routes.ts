import { getTODO, itsWorks } from "@controllers/todo"
import { movies, userLogin } from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", movies)
  app.get("/login", userLogin)
}
