import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Category Entity
 */
@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'category_name', length:20, type:'varchar', unique:true})
    categoryName: string;

    @Column({name:'is_active', default:true})
    isActive:boolean;

    @CreateDateColumn({name:'created_on'})
    createdOn: Date;

    @DeleteDateColumn({name:'deleted_on', default:null})
    deletedOn:Date;
}