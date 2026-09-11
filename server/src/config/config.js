import dotenv from 'dotenv'


dotenv.config()


const config ={
    Port:process.env.PORT,
    Uri:process.env.MONGO_URI
}

export default config