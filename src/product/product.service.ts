import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entity/product.entity";
import { Repository } from "typeorm";
import { CreateProductDto, UpdateProductDto } from "./dto/Product.dto";

/**
 * Product Service
 */
@Injectable()
export class ProductService {

    constructor(@InjectRepository(Product) private productRepo: Repository<Product>){}

    /**
     * fetch all the products from the db
     * @returns product details
     */
    async allProducts(): Promise<CreateProductDto[]> {
        return await this.productRepo.find();
    }

    /**
     * product create
     * @param CreateProductDto product name- quantity-price
     * @returns Newly Created row
     */
    async create(CreateProductDto:CreateProductDto): Promise<CreateProductDto> {
        return await this.productRepo.save(CreateProductDto);
    }

    /**
     * product details by id
     * @param id product id
     * @returns product details
     */
    async getProductById(id:number) : Promise<CreateProductDto> {
        return await this.productRepo.findOneBy({id});
    }

    /**
     * product details by name
     * @param productName product name
     * @returns product details
     */
    async getProduct(productName:string) : Promise<CreateProductDto> {
        const product = await this.productRepo.findOne({
            where: {
                productName : productName
            }
        });
        return product;
    }

    /**
     * Update product
     * @param id product id 
     * @param updateProductDto quantity
     * @returns updated product details
     */
    async update(id:number, updateProductDto:UpdateProductDto) {
        return await this.productRepo.update(id, {
            quanity: updateProductDto.quanity
        });
    }

    /**
     * product delete from DsB
     * @param id product id
     * @returns affected row
     */
    async delete(id:number) {
        return await this.productRepo.delete({id:id});
    }
}
