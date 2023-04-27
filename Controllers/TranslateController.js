import translate from "translate-google-modified"

export const translateData=async(req,res)=>{
    
        try {
          const {obj,code}=req.body
          console.log(obj);
          const data=await translate(obj, {to: code}).then(resp => {
              return resp
          }).catch(err => {
              return err
          })
  
          res.status(200).json({data})
        } catch (error) {
          res.status(500).json(error)
        }

}