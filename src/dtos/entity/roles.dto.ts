import { Column, Entity, OneToMany } from "typeorm";


@Entity()
export class Roles {
    @Column({ primary: true, generated: true })
    id?: number;

    @Column()
    name: string;

    
}