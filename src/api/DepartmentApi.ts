import {FULL_DEPARTMENT_API} from '../utils/Data';
import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../utils/http-common';

export const STATUS_SUB = 1;

export interface DepartmentInterface {
    "deptno": number;
    "dname": string;
    "loc": string;
}

/*__________________________________________*/

interface ValidationErrorsDepartment {
    errorMessage: string
    field_errors: Record<string, string>
    department?: DepartmentInterface,
    response?:DepartmentInterface[],
    message?: string,
    error?: boolean
}

export const fetchDepartments = createAsyncThunk<{departments: DepartmentInterface[]},{},{rejectValue: ValidationErrorsDepartment}>('employee/fetchDepartments', async (dt, { rejectWithValue }) => {

    const response = (await http.get(
        FULL_DEPARTMENT_API,
        )).data
  
    return {
      departments: response.departments
    }
  
})