import { getRepository } from "typeorm"
import { Movie } from "@models/entity/Movie"
import { Userlogin } from "@models/entity/UserLogin"
import { response } from "express"
import { error } from "console"

export const movies = async (request, response) => {
  try {
    const movies = await getRepository(Movie).find({
      select: ["id", "image", "title", "releaseDate", "resume", "note"],
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

    if (!user || (user.email === email && user.password !== password)) {
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
      actors,
      resume,
      awards,
      note,
    } = await request.body

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
      actors: actors.split(","),
      resume,
      awards: awards.split(","),
      note,
    })

    movieRepository.save(salvarMovies)

    return response.status(200).json({ auth: true, message: "sucesso" })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getMovieId = async (request, response) => {
  try {
    const idRepository = getRepository(Movie)
    const id = request.params.id
    const idMovie = await idRepository.findOne({ where: { id } })

    if (idMovie) {
      return response.status(200).json(idMovie)
    }
    return response.status(500).json({ message: "Falha ao encontrar Filme." })
  } catch (error) {
    return response.status(500).json({ message: "Falha ao encontrar Filme." })
  }
}

export const getDeleteId = async (request, response) => {
  try {
    const idRepository = getRepository(Movie)
    const responseDelete = await idRepository.delete(request.params.id)

    if (responseDelete.affected === 0) {
      return response.status(404).json({ message: "Falha ao deletar Filme." })
    }
    return response.status(200).json({ message: "Filme deletado" })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const putMovieId = async (request, response) => {
  try {
    const { id } = request.params
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
      actors,
      resume,
      awards,
      note,
    } = request.body

    const idRepositoryPut = getRepository(Movie)
    let movie = await idRepositoryPut.findOne({ where: { id } })
    console.log(movie)
    if (title) {
      movie.title = title
    }
    if (gender) {
      movie.gender = gender
    }
    if (classification) {
      movie.classification = classification
    }
    if (subtitle) {
      movie.subtitle = subtitle
    }
    if (image) {
      movie.image = image
    }
    if (releaseDate) {
      movie.releaseDate = releaseDate
    }
    if (director) {
      movie.director = director
    }
    if (writer) {
      movie.writer = writer
    }
    if (studio) {
      movie.studio = studio
    }
    if (actors) {
      movie.actors = actors.split(",")
    }
    if (resume) {
      movie.resume = resume
    }
    if (awards) {
      movie.awards = awards.split(",")
    }
    if (note) {
      movie.note = note
    }
    await idRepositoryPut.save(movie)

    return response.status(200).json({ messsage: "atualizado com sucesso" })
  } catch (error) {
    return response.status(500).json({ message: "não foi possivel atualizar" })
  }
}
