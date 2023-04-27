import translate from "translate-google-modified"

export const translateData=async(req,res)=>{
    
        try {
          const {obj,code}=req.body
          console.log(obj);
          const data=await translate(obj, {to: code})
          res.status(200).json({data})
        } catch (error) {
          res.status(500).json(error)
        }

}