import jwt from 'jsonwebtoken';

const getToken = (payload: any) => {
  const secret = process.env.JWT_SECRET || '';
  return jwt.sign(payload, secret)
}


export default getToken