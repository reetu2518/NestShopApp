import { BadRequestException, Body, ConflictException, Controller, Delete, Get, HttpStatus, InternalServerErrorException, NotFoundException, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotNullException } from 'src/common/exception/not-null-exception';
import { messages } from 'src/constants/constant';
import { UpdateProductDto, CreateProductDto } from './dto/Product.dto';
import { ProductService } from './product.service';

/**
 * Product Controller
 */
@ApiTags('Products')
@Controller('product')
export class ProductController {
    
    constructor(private productService:ProductService){}

    /**
     * Fetch All products
     */
    @ApiOkResponse({status:HttpStatus.OK, description:"Product fetch Successfully!"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Get()
    async allProducts() {
        try {
            const result = await this.productService.allProducts();
            if (result.length === 0) throw new NotFoundException({status:HttpStatus.NOT_FOUND, messages:messages.dataNotFound});
            return result;
        } catch (error) {
            throw new InternalServerErrorException({status:HttpStatus.INTERNAL_SERVER_ERROR, messages:messages.internalError});
        }
    }
    
    /**
     * Fecth product By Id
     * @param id product id
     * @returns Product details
     */
    @ApiOkResponse({status:HttpStatus.OK, description:"Products details fetch Successfully By Id!"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Get(':id')
    async getProductById(@Param('id', ParseIntPipe) id:number) {
        try {
            const result = await this.productService.getProductById(id);
            if (result == null) throw new NotNullException({status:HttpStatus.NOT_FOUND, message:messages.dataNotFound});
            return result;
        } catch (error) {
            if (error.status == 705) throw new NotNullException({status:HttpStatus.NOT_FOUND, message:messages.dataNotFound});
            throw new InternalServerErrorException({status:HttpStatus.INTERNAL_SERVER_ERROR, messages:messages.internalError});
        }
    }


    /**
     * Fecth product By Name
     * @param productName product name
     * @returns product details
     */
    @ApiOkResponse({status:HttpStatus.OK, description:"Products details fetch Successfully By Name!"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Get('/details/:productName')
    async getProduct(@Param('productName') productName:string) {
        if(typeof(productName) != "string") throw new BadRequestException();
        const result = this.productService.getProduct(productName);
        result.then((data)=>{
            if(data == null) return new NotNullException({status:HttpStatus.NOT_FOUND, message:messages.dataNotFound});
        });
        // if (result == null)  throw new NotNullException({status:HttpStatus.NOT_FOUND, message:messages.dataNotFound});
        return result;
    }

    /**
     * Product Create
     * @param createProductDto product name-quantity-price
     * @returns Newly created product
     */
    @ApiCreatedResponse({status:HttpStatus.CREATED, description:messages.createSucess})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Post('create')
    async create(@Body(new ValidationPipe()) createProductDto:CreateProductDto) {
        try {
            const result = await this.productService.create(createProductDto);
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
     * Update product
     * @param id product id
     * @param updateProductDto quantity
     * @returns product updated details
     */
    @ApiResponse({status:HttpStatus.ACCEPTED, description:messages.updateSucess})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Put('update/:id')
    async update(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateProductDto:UpdateProductDto
    ) {
        return await this.productService.update(id, updateProductDto);
    }

    /**
     * Product delete
     * @param id product id
     * @returns affcted rows
     */
    @ApiOkResponse({status:HttpStatus.OK, description:messages.deleteSucess})
    @ApiNotFoundResponse({status:HttpStatus.NOT_FOUND, description:"Category Not Found"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Delete('delete/:id')
    async delete(@Param('id', ParseIntPipe) id:number) {
        return await this.productService.delete(id);
    }
}
