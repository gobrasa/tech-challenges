import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity} from "typeorm"
import {Role} from "./Role";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    first_name: string

    @Column('varchar')
    last_name: string

    @Column('varchar')
    email: string

    @ManyToMany(() => Role, (role) => role.persons)
    @JoinTable()
    roles: Role[]
}