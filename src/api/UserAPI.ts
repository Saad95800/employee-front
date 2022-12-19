import {FULL_EMPLOYEE_API} from '../utils/Data';
import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../utils/http-common';

export const STATUS_SUB = 1;

export interface EmployeeInterface {
    "EMPNO": number;
    "ENAME": string;
    "JOB": string;
    "MGR": string;
    "HIREDATE": string;
    "SAL": number;
    "COMM": number;
    "DNAME": number;
    "subordinates"?: EmployeeInterface[];
    "directAndIndirectSubordinates"?: EmployeeInterface[];
}

/*__________________________________________*/

interface ValidationErrorsUser {
    errorMessage: string
    field_errors: Record<string, string>
    user?: EmployeeInterface,
    response?:EmployeeInterface[],
    message?: string,
    error?: boolean
}

// interface DataUserLogin {
//     token: string,
//     user: User
// }

// export const getUserByToken = createAsyncThunk<DataUserLogin, { token: string }, { rejectValue: ValidationErrorsUser }>('users/getUserByToken', async (dt, {rejectWithValue}) => {
//     const response = (await http.get(FULL_USER_TOKEN_API, {
//         headers: {'Authorization': 'Bearer ' + dt.token, 'Content-type': 'application/json'}
//     })).data

//     return {
//         logged: true,
//         token: dt.token,
//         user: response[0]
//     }
// })

/*____________________________*/

// interface UserLogin {
//     token: string,
//     username: string
// }

// export const loginUser = createAsyncThunk<UserLogin, { username: string, password: string }, { rejectValue: ValidationErrorsUser }>('users/login', async (userData, {rejectWithValue}) => {
//     const response = (await http.post(FULL_LOGIN_API, userData)).data

//     return {
//         token: response.token,
//         username: userData.username
//     }
// })

// /*__________________________*/

// interface FetchUser {
//     user: User
// }

// export const fetchUserById = createAsyncThunk<FetchUser, { token: string, id_user: number }, { rejectValue: ValidationErrorsUser }>('users/fetchUserById', async (dt, {rejectWithValue}) => {
//     const response = (await http.get(FULL_GET_USER_API + dt.id_user, {
//         headers: {'Authorization': 'Bearer ' + dt.token, 'Content-type': 'application/json'}
//     })).data

//     return {
//         user: response
//     }
// })

export const fetchEmployees = createAsyncThunk<{employees: EmployeeInterface[]},{job: string},{rejectValue: ValidationErrorsUser}>('trombinoscope/getUsers', async (dt, { rejectWithValue }) => {

    const response = (await http.post(
        FULL_EMPLOYEE_API,
        JSON.stringify({job: dt.job}),
        )).data
  
    return {
      employees: response.employees
    }
  
})