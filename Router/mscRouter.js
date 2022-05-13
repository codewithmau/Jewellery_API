const{createMsc,getMsc,putMsc,deleteMsc} = require("../Controller/mscController")
const route = require("express").Router();

route.post("/insert", async (req,res)=>{
    try 
    {
        const result = await createMsc(req.body)
        if(result.errors)
        {
            res.status(400).json ({errors:true,message:result.message})  
        } 
        res.status(200).json ({errors:false,data:result.data})    
    } 
    catch (error) 
    {
        res.status(400).json ({errors:true,message:error.message})     
    }
})

route.get("/get", async (req,res)=>{
    try 
    {
        const result = await getMsc()
        if(result.errors)
        {
            res.status(400).json ({errors:true,message:result.message})  
        } 
        res.status(200).json ({errors:false,data:result.data})    
    } 
    catch (error) 
    {
        res.status(400).json ({errors:true,message:error.message})     
    }
})

route.put("/put/:id", async (req,res)=>{
    try 
    {
        const id = req.params.id;
        const result = await putMsc(id,req.body)
        if(result.errors)
        {
            res.status(400).json ({errors:true,message:result.message})  
        } 
        res.status(200).json ({errors:false,data:result.data})    
    } 
    catch (error) 
    {
        res.status(400).json ({errors:true,message:error.message})     
    }
})

route.delete("/delete", async (req,res)=>{
    try 
    {
        const id = req.params.id;
        await deleteMsc(id)
        if(result.errors)
        {
            res.status(400).json ({errors:true,message:result.message})  
        } 
        res.status(200).json ({errors:false,data:result.data})    
    } 
    catch (error) 
    {
        res.status(400).json ({errors:true,message:error.message})     
    }
})

module.exports = route