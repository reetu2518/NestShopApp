import { Body, ConflictException, Controller, Delete, Get, HttpStatus, Inject, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotNullException } from 'src/common/exception/not-null-exception';
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
            const result = await this.categoryService.allCategories();            
            if (result.length === 0) throw new NotFoundException({status:400, messages:messages.dataNotFound})
            return result;
        } catch (error) {
            throw new InternalServerErrorException({status:HttpStatus.INTERNAL_SERVER_ERROR, messages:messages.internalError});            
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
    async create(@Body(new ValidationPipe()) createCatoegoryDto:CreateCatoegoryDto) {
        try {
            const result = await this.categoryService.create(createCatoegoryDto);
            return result;
        } catch (error) {
            if (error.code == '23505') {
                throw new ConflictException({status:HttpStatus.CONFLICT, messages:messages.alreadyExist});
            } else if(error.code == '23502') {
                throw new NotNullException({message:messages.categoryNotEmpty});
            } else {
                throw new InternalServerErrorException({status:HttpStatus.INTERNAL_SERVER_ERROR, messages:messages.internalError});
            }
        }
    }


    /**
     * Fetch Category By Id
     * @param id Category Id
     * @returns Category Details
     */
    @ApiOkResponse({status:HttpStatus.OK, description:"Categories fetch Successfully By Id!"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Get(':id')
    async getCategory(@Param('id', ParseIntPipe) id:number) {
        const result = await this.categoryService.getCategory(id);
        if (result == null) throw new NotNullException({status:HttpStatus.NOT_FOUND, message:messages.dataNotFound});
        return result;
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
        @Param('id', ParseIntPipe) id:number,
        @Body() updateCatoegoryDto:UpdateCatoegoryDto
    ) {
        const result = this.categoryService.update(id, updateCatoegoryDto);
        return result;
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
    async delete(@Param('id', ParseIntPipe) id:number) {
        return await this.categoryService.delete(id);
    }
}
