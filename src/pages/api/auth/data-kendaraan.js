import connectMongo from "database/conn"
import Kendaraan from 'model/Data-Driver'
import { hash } from 'bcryptjs'
import Router from "next/router"
import { createRouter } from "next-connect"


export default async function handler(req,res){
    connectMongo().catch(error=>res.json({error:"Connection Failed!"}))

    console.log(req.body);
    

    if(req.method === 'POST'){

        if(!req.body)return res.status(404).json({error:"Don't have form data!"});
        const{namakendaraan,nomorpolisi,warna} = req.body

        const kendaraan = await Kendaraan.create({namakendaraan,nomorpolisi,warna}//, function(err, data){
          // if(err)return res.status(404).json({err});
          // return res.status(201).json({status:true,user:data})  
        // }
        )

        if (!kendaraan) {
          return res.status(400).json({status:false,message:"failed to create user"})
        }

        return res.status(200).json({status:true,message:"user created"})

    }else{
        res.status(500).json({status:false, message:"HTTP method not valid only POST Accepted"})
    }

}
