import { getRepository } from "typeorm"
import { Movie } from "@models/entity/Movie"
import { Userlogin } from "@models/entity/UserLogin"
import { response } from "express"
import { error } from "console"

export const movies = async (request, response) => {
  try {
    const movies = await getRepository(Movie).find({
      select: ["id", "title", "releaseDate", "resume", "note"],
    })
    return response.status(200).json(movies)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const userLogin = async (request, response) => {
  try {
    const { email, password } = request.body
    const userRepository = getRepository(Userlogin)
    const user = await userRepository.findOne({ where: { email } })

    if (!user) {
      return response.status(404).json({ auth: false, message: "falha" })
    }
    if (user.email === email && user.password === password) {
      return response.status(200).json({ auth: true, message: "sucesso" })
    }
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postMovie = async (request, response) => {
  try {
    const movieRepository = getRepository(Movie)
    const {
      title,
      gender,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      resume,
      note,
    } = request.body
    let actors = request.body.actors.split(" ")
    let awards = request.body.awards.split(" ")
    const salvarMovies = movieRepository.create({
      title,
      gender,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      actors,
      resume,
      awards,
      note,
    })
    console.log(salvarMovies)
    await movieRepository.save(salvarMovies)

    return response.status(200).json({ auth: true, message: "sucesso" })
  } catch (error) {
    return response.status(404).json({ auth: false, message: "falha" })
  }
}
