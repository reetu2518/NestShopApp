import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entity/category.entity";
import { Repository } from "typeorm";
import { CreateCatoegoryDto, UpdateCatoegoryDto } from "./dto/category.dto";

/**
 * Category Service
 */
@Injectable()
export class CategoryService {

    /**
     * Inject Category 
     * @param categoryRepo 
     */
    constructor(@InjectRepository(Category) private categoryRepo: Repository<Category>){}

    /**
     * Fetch all Cateogries from DB
     * @returns list of categories
     */
    async allCategories(): Promise<CreateCatoegoryDto[]> {
        return await this.categoryRepo.find();
    }

    /**
     * Create New Category in DB
     * @param createCatoegoryDto Category Name 
     * @returns Newly Cateogory row
     */
    async create(createCatoegoryDto:CreateCatoegoryDto): Promise<CreateCatoegoryDto> {
        return await this.categoryRepo.save(createCatoegoryDto);
    }

    /**
     * Get Category By Id
     * @param id Category Id
     * @returns category
     */
    async getCategory(id:number) : Promise<CreateCatoegoryDto> {
        return await this.categoryRepo.findOneBy({id});
    }

    /**
     * Update Category Name
     * @param id Category Id
     * @param updateCatoegoryDto Category Name
     * @returns Category
     */
    async update(id:number, updateCatoegoryDto:UpdateCatoegoryDto) {
        const row = this.categoryRepo.findOneBy({id});
        row.then(async affectedRow=>{
            if(affectedRow == null) return false;
        })
        return await this.categoryRepo.update(id, {
            categoryName: updateCatoegoryDto.categoryName
        });
        // .catch()
    }

    /**
     * Delete Category row from DB
     * @param id Cateogry Id
     * @returns Afftected row
     */
    async delete(id:number) {
        return await this.categoryRepo.delete({id:id});
    }

}