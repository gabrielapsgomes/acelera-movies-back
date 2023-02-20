import { getTODO, itsWorks } from "@controllers/todo"
import {
  getDeleteId,
  getMovieId,
  movies,
  postMovie,
  putMovieId,
  userLogin,
} from "@controllers/movie"
import { createUser, getUsers } from "@controllers/users"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", movies)
  app.post("/login", userLogin)
  app.post("/movie", postMovie)
  app.get("/movie/:id", getMovieId)
  app.delete("/movie/:id", getDeleteId)
  app.put("/movie/:id", putMovieId)
  app.post("/users", createUser)
  app.get("/users", getUsers)
}
