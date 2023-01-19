import { text } from "stream/consumers"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "title", type: "varchar" })
  title: String

  @Column({ name: "gender", type: "varchar" })
  gender: String

  @Column({ name: "classification", type: "varchar" })
  classification: String

  @Column({ name: "subtitle", type: "varchar" })
  subtitle: number

  @Column({ name: "image", type: "varchar" })
  image: String

  @Column({ name: "releaseDate", type: "date" })
  releaseDate: Date

  @Column({ name: "director", type: "varchar" })
  director: String

  @Column({ name: "writer", type: "varchar" })
  writer: String

  @Column({ name: "studio", type: "varchar" })
  studio: String

  @Column({ name: "actors", type: "text", array: true })
  actors: String[]

  @Column({ name: "resume", type: "varchar" })
  resume: String

  @Column({ name: "awards", type: "text", array: true })
  awards: String[]

  @Column({ name: "note", type: "integer" })
  note: Number
}
