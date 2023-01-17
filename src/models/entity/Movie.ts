import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "name", type: "varchar" })
  name: String

  @Column({ name: "resume", type: "text" })
  resume: String

  @Column({ name: "releaseDate", type: "varchar" })
  releaseDate: String

  @Column({ name: "score", type: "integer" })
  score: number

  @Column({ name: "image", type: "varchar" })
  image: String

  @Column({ name: "director", type: "varchar" })
  director: String

  @Column({ name: "writter", type: "varchar" })
  writter: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "studio", type: "varchar" })
  studio: String
}
