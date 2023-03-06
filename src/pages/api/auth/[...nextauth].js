import { connect } from 'mongoose';
import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import connectMongo from 'database/conn';
import Users from 'model/Schema'
import CredentialProvider from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs';

export default NextAuth({
    providers:[
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        
        CredentialProvider({
            name:"Credentials",
            async authorize(credentials,req){
                connectMongo().catch(error =>{error:"Connection Failed"})

                //check user
                const result = await Users.findOne({phonenumber:credentials.phonenumber})
                if(!result){
                    throw new Error("No User Found with this Phone Number")
                }

                //compare
                const checkPassword = await compare(credentials.password, result.password);

                //incorrect password
                if(!checkPassword || result.phonenumber !== credentials.phonenumber){
                    throw new Error("Username or password not match")
                }

                return result;
            }
        })
        
    ],
    secret:"maBHjeprY5mTpqKoT7eExJj3eI2SsDfIdKCLLSlkBI="

})