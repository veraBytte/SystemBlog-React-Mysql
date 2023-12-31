import {db} from "../db.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

export const login = (req,res)=>{
    //Validacion del usuario

    const q = "SELECT * FROM users WHERE email = ?";

    db.query(q, [req.body.email], (err, data)=>{
        if (err) return res.status(500).json(err);
        if(data.length === 0)return res.status(404).json("Usuario no encontrado");

        // Se compara la contraseña ingresada con el hash guardado en la base de datos
        const isPasswordTrue = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPasswordTrue)
            return res.status(400).json("Contraseña incorrecta");

        // Se genera el token
        const token = jwt.sign(
            {
                id: data[0].id,
            }, "jwtKey"
        );
        const{password,...other}= data[0];
        
        /*const user = {
            id: data[0].id,
            username: data[0].username,
        };*/

        // Se envia el token como cookie
        res.cookie("access_token", token, {
            httpOnly: true,
            //EL token expira en 2 minutos
            maxAge: 5*60*1000,
        }).status(200).json(other);
    })
}

export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    });
    return res.status(200).json("Usuario ha cerrado sesion.")
  };