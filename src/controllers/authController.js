import bcrypt from 'bcrypt'
import * as authRepository from '../repository/authRepository.js'

export async function signup(req, res){
    try {
        const { name, email, password } = req.body;
    
        if (!name || !email || !password) {
          return res.sendStatus(422);
        }
    
        const existingUsers = authRepository.findUser(email)
    
        if (existingUsers.rowCount > 0) {
          return res.sendStatus(409);
        }
    
        const hashedPassword = bcrypt.hashSync(password, 12);
    
        authRepository.saveUser(name, email, hashedPassword)
    
        res.sendStatus(201);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}

export async function signin(req, res){
    try {
        const { email, password } = req.body;
    
        if (!email || !password) {
          return res.sendStatus(422);
        }
    
        const { rows } = authRepository.findUser(email)
        const [user] = rows;
    
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return res.sendStatus(401);
        }
    
        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_SECRET
        );
    
        res.send({
          token,
        });
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}

