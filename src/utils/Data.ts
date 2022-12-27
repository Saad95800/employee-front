const data = {
    host: process.env.REACT_APP_API_URL
}

export const textPassword = 'Doit contenir au moins 12 caractères, 1 majuscule, 1 chiffre et 1 caractère spécial'

export {data};

export const API_URL = '/api'
export const EMPLOYEE_API = API_URL+'/employees'
export const DEPARTMENT_API = API_URL+'/departments'
export const EMPLOYEE_UPDATE_API = API_URL+'/employee/update/'
export const EMPLOYEE_DELETE_API = API_URL+'/employee/delete/'
export const EMPLOYEE_ADD_API = API_URL+'/employee/add'

export const FULL_EMPLOYEE_API = data.host + EMPLOYEE_API
export const FULL_DEPARTMENT_API = data.host + DEPARTMENT_API
export const FULL_EMPLOYEE_UPDATE_API = data.host + EMPLOYEE_UPDATE_API
export const FULL_EMPLOYEE_DELETE_API = data.host + EMPLOYEE_DELETE_API
export const FULL_EMPLOYEE_ADD_API = data.host + EMPLOYEE_ADD_API