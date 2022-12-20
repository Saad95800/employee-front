import {createSlice} from "@reduxjs/toolkit";
import {fetchEmployees} from '../../api/UserAPI'
import type {EmployeeInterface} from '../../api/UserAPI'
import { DepartmentInterface, fetchDepartments } from "../../api/DepartmentApi";

export interface EmployeeState {
    employees: EmployeeInterface[]
    employeeSelected?: EmployeeInterface | null,
    employeeToEdit?: EmployeeInterface | null,
    showModalEmployee: boolean,
    showModalEditEmployee: boolean,
    context: string,
    departments: DepartmentInterface[],
    nameEmployee: string,
    job: string,
    manager: string,
    department: string,
    sal: string,
    com: string
}

const initialState: EmployeeState = {
    employees: [],
    employeeSelected: null,
    employeeToEdit: null,
    showModalEmployee: false,
    showModalEditEmployee: false,
    context: 'edit',
    departments: [],
    nameEmployee: '',
    job: '',
    manager: '',
    department: '',
    sal: '',
    com: ''
}

export const EmployeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        setEmployeeSelected: (state, action) => {
            state.employeeSelected = action.payload
        },
        setEmployeeToEdit: (state, action) => {
            state.employeeToEdit = action.payload
        },
        setShowModalEmployee: (state, action) => {
            state.showModalEmployee = action.payload
        },
        setShowModalEditEmployee: (state, action) => {
            state.showModalEditEmployee = action.payload
        },
        setContext: (state, action) => {
            state.context = action.payload
        },
        setName: (state, action) => {
            state.nameEmployee = action.payload
        },
        setJob: (state, action) => {
            state.job = action.payload
        },
        setManager: (state, action) => {
            state.manager = action.payload
        },
        setDepartment: (state, action) => {
            state.department = action.payload
        },
        setSal: (state, action) => {
            state.sal = action.payload
        },
        setCom: (state, action) => {
            state.com = action.payload
        },
    },
    extraReducers: 
    (builder) => {
        builder
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            state.employees = action.payload.employees
        })
        .addCase(fetchDepartments.fulfilled, (state, action) => {
            state.departments = action.payload.departments
        })
    },
})

export const {
    setEmployeeSelected, 
    setShowModalEmployee, 
    setShowModalEditEmployee, 
    setEmployeeToEdit, 
    setName,
    setJob,
    setManager,
    setDepartment,
    setSal,
    setCom,
    setContext} = EmployeeSlice.actions

export default EmployeeSlice.reducer
