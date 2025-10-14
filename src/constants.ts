import process from "process";



export const BASE_URL = process.env.NODE_ENV === 'production' ? 'none' : 'localhost:3000'