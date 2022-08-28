import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { messages } from "src/constants/constant";

/**
 * Product Create Schema
 */
export class CreateProductDto {
    
    /**
     * Product name
     */
    @ApiProperty({description:"Product name description", required:true})
    @IsNotEmpty({
        message : messages.productNotEmpty
    })
    productName:string;

    /**
     * Product Price
     */
    @ApiProperty({description:"Product Price", required:true})
    price:number;
    
    /**
     * Product quantity
     */
    @ApiProperty({description:"Product quantity", required:true})
    quanity:number;
    
    /**
     * Product description"
     */
    @ApiProperty({description:"Product description", required:true})
    description:string;
}

/**
 * Update Product Schema
 */
export class UpdateProductDto {
    /**
     * Product quantity
     */
    @ApiProperty({description:"Product quantity", required:true})
    quanity:number;
}