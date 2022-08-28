import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
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
        return await this.productService.allProducts();
    }
    
    /**
     * Fecth product By Id
     * @param id product id
     * @returns Product details
     */
    @ApiOkResponse({status:HttpStatus.OK, description:"Products details fetch Successfully By Id!"})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Get(':id')
    async getProductById(@Param('id') id:number) {
        return await this.productService.getProductById(id);
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
        console.log("Hii");
        console.log(productName);
        return await this.productService.getProduct(productName);
    }

    /**
     * Product Create
     * @param createProductDto product name, quantity, price
     * @returns Newly created product
     */
    @ApiCreatedResponse({status:HttpStatus.CREATED, description:messages.createSucess})
    @ApiInternalServerErrorResponse({status:HttpStatus.INTERNAL_SERVER_ERROR, description:messages.internalError})
    @Post('create')
    async create(@Body() createProductDto:CreateProductDto) {
        return await this.productService.create(createProductDto);
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
        @Param('id') id:number,
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
    async delete(@Param('id') id:number) {
        return await this.productService.delete(id);
    }
}
