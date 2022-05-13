const mscSchema = require("../DB/mscDB")

exports.createMsc = async (msc)=>{
    try 
    {
        const mscs = await new mscSchema(msc) 
        const data = await mscs.save()
        return {errors:false,data:data}  
    } 
    catch (error) 
    {
       return {errors:true,message:error.message}   
    }
}

exports.getMsc = async ()=>{
    try 
    {
        const data = await  mscSchema.find() 
        return {errors:false,data:data}  
    } 
    catch (error) 
    {
       return {errors:true,message:error.message}   
    }
}

exports.putMsc = async (id,msc)=>{
    try 
    {
        const data = await mscSchema.findByIdAndUpdate(id,msc,{new:true})
        return {errors:false,data:data}  
    } 
    catch (error) 
    {
       return {errors:true,message:error.message}   
    }
}

exports.deleteMsc = async (id)=>{
    try 
    {
        await mscScheman.findByIdAndDelete(id) 
        return {errors:false,data:data}  
    } 
    catch (error) 
    {
       return {errors:true,message:error.message}   
    }
}