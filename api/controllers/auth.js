import {db} from "../db.js"
import bcrypt from "bcrypt";


export const register = (req,res)=>{
    // Revisar la validex de la informacion
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q,[req.body.email, req.body.name], (err, data)=>{
        if(err)return res.json(err);

        if(data.length)return res.status(409).json("EL usuario ya existe");

        // Se utiliza la libreria bcrypt para encriptar la contraseña
        // EL hash de la contraseña se guarda en la base de datos
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values =[
            req.body.username,
            req.body.email,
            hash
        ]
        
        db.query(q, [values], (err, data)=>{
            if(err)return res.json(err);

            return res.status(200).json("Usuario creado correctamente");
        })
        
    })
}

export const login = (req,res)=>{}

export const logout = (req,res)=>{}