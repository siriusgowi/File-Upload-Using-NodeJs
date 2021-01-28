const express = require ('express')
const multer = require ('multer')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})
const app = express()
const PORT = process.env.PORT || 3000

const upload = multer({
    dest :'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/.\jpg|jpeg|png/)){
            return cb(new Error('please upload a image file'))
        }
        cb(undefined, true)
    }
})

app.post('/upload',upload.single('upload'),(req, res)=>{
res.send()

},(error, req, res, next)=>{
    res.status(400).send({
        error:error.message
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})