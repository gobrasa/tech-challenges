import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, BaseEntity} from "typeorm"
import {Person} from "./Person";

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column('varchar')
    name: string

    @ManyToMany(() => Person, (person) => person.roles)
    persons: Person[]
}