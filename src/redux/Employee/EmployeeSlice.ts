import {createSlice} from "@reduxjs/toolkit";
import {fetchEmployees} from '../../api/UserAPI'
import type {EmployeeInterface} from '../../api/UserAPI'

export interface EmployeeState {
    employees: EmployeeInterface[]
    employeeSelected?: EmployeeInterface,
    showModalEmployee: boolean
}

const initialState: EmployeeState = {
    employees: [],
    employeeSelected: undefined,
    showModalEmployee: false
}

export const EmployeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        setEmployeeSelected: (state, action) => {
            state.employeeSelected = action.payload
        },
        setShowModalEmployee: (state, action) => {
            state.showModalEmployee = action.payload
        }
    },
    extraReducers: 
    (builder) => {
        builder
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            console.log(action.payload.employees)
            state.employees = action.payload.employees
        })
        
    },
})

export const {setEmployeeSelected, setShowModalEmployee} = EmployeeSlice.actions

export default EmployeeSlice.reducer
