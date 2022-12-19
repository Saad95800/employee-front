const data = {
    host: process.env.REACT_APP_API_URL
}

export const textPassword = 'Doit contenir au moins 12 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial'

export {data};

export const API_URL = '/api'
export const EMPLOYEE_API = API_URL+'/employees'

export const FULL_EMPLOYEE_API = data.host + EMPLOYEE_API