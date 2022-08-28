import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";
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
    @Length(3,20, {message:"Category length should in between 3-20"})
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
    @Length(3,20, {message:"Category length should in between 3-20"})
    @IsNotEmpty({
        message : messages.categoryNotEmpty
    })
    categoryName:string;
}