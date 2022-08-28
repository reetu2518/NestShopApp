import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
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
    @IsString()
    @Length(3,20, {message:"Product length should in between 3-20"})
    productName:string;

    /**
     * Product Price
     */
    @ApiProperty({description:"Product Price", required:true})
    @IsNotEmpty({
        message : messages.priceNotEmpty
    })
    @IsNumber()
    price:number;
    
    /**
     * Product quantity
     */
    @ApiProperty({description:"Product quantity", required:true})
    @IsNotEmpty({
        message : messages.quanityNotEmpty
    })
    @IsNumber()
    quanity:number;
    
    /**
     * Product description"
     */
    @ApiProperty({description:"Product description", required:true})
    @IsString()
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
    @IsNotEmpty({
        message : messages.priceNotEmpty
    })
    @IsNumber()
    quanity:number;
}