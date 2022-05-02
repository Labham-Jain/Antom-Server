import jwt from 'jsonwebtoken'
const verifyToken = (token: string) => {
  const secret = process.env.JWT_SECRET || '';
  const validToken = jwt.verify(token, secret)
  if(validToken) return jwt.decode(token)
}

export default verifyToken