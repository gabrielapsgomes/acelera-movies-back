import { getRepository } from "typeorm"
import { Userlogin } from "@models/entity/UserLogin"
import md5 from "md5"

export const createUser = async (request, response) => {
  try {
    const userReq = request.body
    userReq.password = md5(userReq.password)
    const userRepository = getRepository(Userlogin)
    const newUser = userRepository.create(userReq)
    await userRepository.save(newUser)
    return response.status(200).json({ status: 200, message: "sucesso" })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getUsers = async (request, response) => {
  try {
    const userRepository = getRepository(Userlogin)
    const users = await userRepository.find({
      order: { id: "ASC" },
      select: ["id", "email", "password"],
    })

    return response.status(200).json(users)
  } catch (error) {
    return response.status(500).json(error)
  }
}
