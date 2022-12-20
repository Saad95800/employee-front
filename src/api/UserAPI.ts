import {FULL_EMPLOYEE_API, FULL_EMPLOYEE_UPDATE_API, FULL_EMPLOYEE_ADD_API} from '../utils/Data'
import {createAsyncThunk} from '@reduxjs/toolkit'
import http from '../utils/http-common'

export interface EmployeeInterface {
    "EMPNO"?: number;
    "ENAME": string;
    "JOB": string;
    "MGR"?: string;
    "MGRNO": number;
    "HIREDATE"?: string;
    "SAL"?: number | null;
    "COMM"?: number | null;
    "DNAME"?: number;
    "DEPTNO": number;
    "subordinates"?: EmployeeInterface[];
    "directAndIndirectSubordinates"?: EmployeeInterface[];
}

interface ValidationErrorsUser {
    errorMessage: string
    field_errors: Record<string, string>
    user?: EmployeeInterface,
    response?:EmployeeInterface[],
    message?: string,
    error?: boolean
}

export const fetchEmployees = createAsyncThunk<{employees: EmployeeInterface[]},{job: string},{rejectValue: ValidationErrorsUser}>('employee/fetchEmployees', async (dt, { rejectWithValue }) => {

    const response = (await http.post(
        FULL_EMPLOYEE_API,
        JSON.stringify({job: dt.job}),
        )).data
  
    return {
      employees: response.employees
    }
  
})

export const updateEmployee = createAsyncThunk<{response: any},EmployeeInterface,{rejectValue: ValidationErrorsUser}>('employee/updateEmployee', async (dt, { rejectWithValue }) => {

    const response = (await http.post(
        FULL_EMPLOYEE_UPDATE_API + dt.EMPNO,
        JSON.stringify(dt),
        )).data
  
    return {
        response: response
    }
  
})

export const addEmployee = createAsyncThunk<{response: any},EmployeeInterface,{rejectValue: ValidationErrorsUser}>('employee/updateEmployee', async (dt, { rejectWithValue }) => {

    const response = (await http.post(
        FULL_EMPLOYEE_ADD_API,
        JSON.stringify(dt),
        )).data
  
    return {
        response: response
    }
  
})
