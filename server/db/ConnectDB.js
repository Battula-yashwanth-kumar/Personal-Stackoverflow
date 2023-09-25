import mongoose from "mongoose";
const ConnectDB=async(props)=>{
  const pass=props.pass;
  const username=props.username;
  const DATABASE_URL=`mongodb+srv://${username}:${pass}@test-pro-db.qukfiur.mongodb.net/?retryWrites=true&w=majority`
  try{
    const DB_OPTIONS={
      useNewUrlParser:true,
    }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    console.log("congrats Autograph Connected Successfully");
  }
  catch(err){
    console.log(err);
  }
}
export default ConnectDB;
