import { HttpModule, HttpService } from '@nestjs/axios';
import { Inject, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  // providers:[CategoryService]
  providers:[{
    provide :CategoryService,
    useClass: CategoryService
  },
  {
    provide: "TOKEN",
    useValue : "Hii constant value here"
  },
  {
    provide : "LIST",
    useFactory: ()=>{
      let arr = [];
      for (let i = 0; i <10; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  {
    provide : "ASYNC_OPR",
    useFactory: async(http: HttpService)=>{
      let res = await http.get("https://jsonplaceholder.typicode.com/users").toPromise();
      return res.data;
    },
    inject : [HttpService]
  }
], 
imports:[HttpModule,
  TypeOrmModule.forFeature([Category])
]
})
export class CategoryModule {}
