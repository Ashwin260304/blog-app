const mongoose=require('mongoose');
const {model,Schema}=mongoose;

const UserSchema=new Schema({
    username:{type:String,reruired:true,min:4,unique:true},
    password:{type:String,required:true},
});

const UserModel=model('User',UserSchema);

module.exports=UserModel;