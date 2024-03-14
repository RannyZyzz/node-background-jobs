import Queue from '../lib/Queue.ts'

export default {
  async store(req, res) {
    const { name, email, password } = req.body

    const user = {
      name,
      email,
      password
    };

    // adicionar job de filas
    await Queue.add({ user })
    
    return res.json(user);
  }
} 
