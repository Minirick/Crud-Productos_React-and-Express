import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true, 
        unique: true,
    },

    token: {
        type: String,
    },

    confirmado: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps:true,
    }
);
adminSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

adminSchema.methods.comprobarPassword = async function(passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
}

const Usuario = mongoose.model("Admin", adminSchema);

export default Usuario;

