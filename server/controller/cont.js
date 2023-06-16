import Query from "../models/query.js";
export const contact=async(req,res,next)=>{
    try{
        
        const newQuery=new Query(req.body)
        await newQuery.save();
        res.status(200).send(newQuery);
    }
    catch(err){
        next(err);
    }
}

