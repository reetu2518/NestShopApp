import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
/**
 * Product Entity
 */
@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"product_name", length:30, type:"varchar"})
    productName:string;

    @Column()
    price:number;

    @Column()
    quanity:number;

    @Column({type:"text"})
    description:string;

    @CreateDateColumn({name:"crated_on"})
    createdOn:Date;

    @UpdateDateColumn({name:"updated_on"})
    updatedOn:Date;
}