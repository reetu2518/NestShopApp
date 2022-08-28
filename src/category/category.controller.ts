import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { messages } from 'src/constants/constant';
import { CategoryService } from './category.service';
import { CreateCatoegoryDto, UpdateCatoegoryDto } from './dto/category.dto';

/**
 * Category Controller
 */
@ApiTags('Categories')
@Controller('category')
export class CategoryController {

    /**
     * Inject Category Service
     * @param categoryService 
     * @param val 
     * @param list 
     * @param userList 
     */
    constructor(
        private categoryService:CategoryService,
        @Inject('TOKEN') val : string,
        // @Inject('LIST') list : Array<number>,
        // @Inject('ASYNC_OPR') userList : Array<string>
    ){
        console.log(val, "constat value");
        // console.log(list, "list value");
        // console.log(userList, "userList");
    }
    

    /**
     * Fetch all Categories
     * @returns all categories
     */
    @ApiOkResponse({status:HttpStatus.OK, description:"Categories fetch Successfully!"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Get()
    async allCategories() {
        try {
            return await this.categoryService.allCategories();
        } catch (error) {
            throw new Error("");            
        }
    }


    /**
     * Create New Category
     * @param createCatoegoryDto Category Name
     * @returns Newly created Category
     */
    @ApiCreatedResponse({status:HttpStatus.CREATED, description:messages.createSucess})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Post('create')
    async create(@Body() createCatoegoryDto:CreateCatoegoryDto) {
        return await this.categoryService.create(createCatoegoryDto);
    }


    /**
     * Fetch Category By Id
     * @param id Category Id
     * @returns Category Details
     */
    @ApiOkResponse({status:HttpStatus.OK, description:"Categories fetch Successfully By Id!"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Get(':id')
    async getCategory(@Param('id') id:number) {
        return await this.categoryService.getCategory(id);
    }

    /**
     * Updated Category By Id
     * @param id Category Id
     * @param updateCatoegoryDto Category Name
     * @returns Updated Category
     */
    @ApiResponse({status:HttpStatus.ACCEPTED, description:messages.updateSucess})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Put('update/:id')
    async update(
        @Param('id') id:number,
        @Body() updateCatoegoryDto:UpdateCatoegoryDto
    ) {
        return await this.categoryService.update(id, updateCatoegoryDto);
    }


    /**
     * Delete Category By Id
     * @param id Category Id
     * @returns affected rows
     */
    @ApiOkResponse({status:HttpStatus.OK, description:messages.deleteSucess})
    @ApiNotFoundResponse({status:HttpStatus.NOT_FOUND, description:"Category Not Found"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Delete('delete/:id')
    async delete(@Param('id') id:number) {
        return await this.categoryService.delete(id);
    }
}
