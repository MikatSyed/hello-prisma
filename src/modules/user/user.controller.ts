import { Request, Response } from "express";
import { UserService } from "./user.service";

const addUser = async (req: Request,res: Response) =>{
 try{
  const result = await UserService.addUser(req.body);

  res.send({
    success: true,
    message: "User created Successfully",
    data: result
  })

 }catch(err){
  res.send(err)
 }
}
const insertOrUpdateProfile = async (req: Request,res: Response) =>{
 try{
  const result = await UserService.insertOrUpdateProfile(req.body);

  res.send({
    success: true,
    message: "User created/updated Successfully",
    data: result
  })

 }catch(err){
  res.send(err)
 }
}
const getUser = async (req: Request,res: Response) =>{
 try{
  const result = await UserService.getUser();

  res.send({
    success: true,
    message: "User retrived Successfully",
    data: result
  })

 }catch(err){
  res.send(err)
 }
}
const getSingleUser = async (req: Request,res: Response) =>{
 try{
  const result = await UserService.getSingleUser(parseInt(req?.params?.id));

  res.send({
    success: true,
    message: "User retrived Successfully",
    data: result
  })

 }catch(err){
  res.send(err)
 }
}

export const UserController = {
    addUser,
    insertOrUpdateProfile,
    getUser,
    getSingleUser
}