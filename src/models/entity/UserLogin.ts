import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Userlogin {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "email", type: "varchar" })
  email: String

  @Column({ name: "password", type: "varchar" })
  password: String
}
