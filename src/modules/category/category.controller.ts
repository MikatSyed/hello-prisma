import { Request, Response } from "express";
import { CategoryService } from "./category.service"

const InsertIntoDB = async (req: Request,res: Response) =>{
    try{
     const result = await CategoryService.InsertIntoDB(req.body);
   
     res.send({
       success: true,
       message: "Category Created Successfully",
       data: result
     })
   
    }catch(err){
     res.send(err)
    }
   }

   export const CategoryController = {
    InsertIntoDB
}