import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { messages } from "src/constants/constant";

/**
 * Category Create Schema
 */
export class CreateCatoegoryDto {
    /**
     * category name
     */
    @ApiProperty({description:"Category name description", required:true})
    @IsNotEmpty({
        message : messages.categoryNotEmpty
    })
    @IsString()
    categoryName:string;

    /**
     * is active status
     */
    @ApiProperty({description:"status for category", default:true})
    isActive:boolean;
}

/**
 * Update Category Schema
 */
export class UpdateCatoegoryDto {
    /**
     * category name
     */
    @ApiProperty({description:"Category name description", required:true})
    @IsNotEmpty({
        message : messages.categoryNotEmpty
    })
    categoryName:string;
}