import {db} from "../db.js"

export const register = (req,res)=>{
    // Revisar la validex de la informacion
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(q,[req.body.email, req.body.username], (err, data)=>{
        if(err)return res.json(err);

        if(data.length)return res.status(409).json("EL usuario ya existe");
        
    })
}

export const login = (req,res)=>{
    res.json({message: "Del controlador"});
}

export const logout = (req,res)=>{
    res.json({message: "Del controlador"});
}