import {SyntheticEvent} from 'react'
import Modal from 'react-bootstrap/Modal'
import {useAppDispatch, useAppSelector} from '../../redux/Hooks'
import { setShowModalEditEmployee ,setEmployeeToEdit, setName, setJob, setManager, setDepartment, setSal, setCom } from '../../redux/Employee/EmployeeSlice'
import type {RootState} from '../../redux/Store'
import Form from "react-bootstrap/Form"
import { useEffect } from 'react'
import { fetchDepartments } from '../../api/DepartmentApi'
import { displayMessage } from '../../redux/Message/MessageSlice'
import { fetchEmployees, updateEmployee, addEmployee } from '../../api/UserAPI'

export default function PopinEditEmployeeForm({context} : {context: string}) {

    const dispatch = useAppDispatch()
    const showModalEditEmployee = useAppSelector((state: RootState) => state.employee.showModalEditEmployee)
    const employeeToEdit = useAppSelector((state: RootState) => state.employee.employeeToEdit)
    const employees = useAppSelector((state: RootState) => state.employee.employees)
    const departments = useAppSelector((state: RootState) => state.employee.departments)

    const nameEmployee = useAppSelector((state: RootState) => state.employee.nameEmployee)
    const job = useAppSelector((state: RootState) => state.employee.job)
    const manager = useAppSelector((state: RootState) => state.employee.manager)
    const department = useAppSelector((state: RootState) => state.employee.department)
    const sal = useAppSelector((state: RootState) => state.employee.sal)
    const com = useAppSelector((state: RootState) => state.employee.com)
    
    useEffect(()=>{
            dispatch(fetchDepartments({}))


            if(employeeToEdit !== null && employeeToEdit !== undefined && context === 'edit'){
                dispatch(setName(employeeToEdit.ENAME))
                dispatch(setJob(employeeToEdit.JOB))
                dispatch(setManager(employeeToEdit.MGRNO))
                dispatch(setDepartment(employeeToEdit.DEPTNO))
                dispatch(setSal(employeeToEdit.SAL))
                dispatch(setCom(employeeToEdit.COMM))
            }else{
                dispatch(setName(''))
                dispatch(setJob(''))
                dispatch(setManager(''))
                dispatch(setDepartment(''))
                dispatch(setSal(''))
                dispatch(setCom(''))
            }

    }, [showModalEditEmployee])

    const handleSubmit = async (e:SyntheticEvent<HTMLFormElement>)=>{

        e.preventDefault()

        if(nameEmployee === ''){
            dispatch(displayMessage({text: "Please select a name", status: 'error'})); return false
        }
        if(job === ''){
            dispatch(displayMessage({text: "Please select a job", status: 'error'})); return false
        }
        if(manager === ''){
            dispatch(displayMessage({text: "Please select  manager", status: 'error'})); return false
        }
        if(department === ''){
            dispatch(displayMessage({text: "Please select a department", status: 'error'})); return false
        }

        if(context === 'edit'){
            if(employeeToEdit !== null && employeeToEdit !== undefined){
                let result = await dispatch(updateEmployee({
                    EMPNO: employeeToEdit.EMPNO,
                    ENAME: nameEmployee,
                    JOB: job,
                    MGRNO: Number(manager),
                    DEPTNO: Number(department),
                    SAL: sal !== '' ? Number(sal) : null,
                    COMM: com !== '' ? Number(com) : null,
                })) 
                console.log(result)
                if(result.meta.requestStatus === 'fulfilled'){   
                    dispatch(displayMessage({text: "Employee updated successfully !", status: 'success'}))    
                    dispatch(fetchEmployees({job: ''}))         
                }else{
                    dispatch(displayMessage({text: "the employee's update failed", status: 'error'}))
                }
                
            }
        }else{
            let result = await dispatch(addEmployee({
                ENAME: nameEmployee,
                JOB: job,
                MGRNO: Number(manager),
                DEPTNO: Number(department),
                SAL: sal !== '' ? Number(sal) : null,
                COMM: com !== '' ? Number(com) : null,
            }))

            if(result.meta.requestStatus === 'fulfilled'){   
                dispatch(displayMessage({text: "Employee added successfully !", status: 'success'}))    
                dispatch(fetchEmployees({job: ''}))         
            }else{
                dispatch(displayMessage({text: "the employee's add failed", status: 'error'}))
            }
        }



        dispatch(setShowModalEditEmployee(false)) 

    }

  return (
    <Modal show={showModalEditEmployee} className="modal-form" id="employeeModal" aria-labelledby="employeeModalLabel" aria-hidden="true">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Employee info</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{
                    dispatch(setShowModalEditEmployee(false))
                    dispatch(setEmployeeToEdit(null))
                }}></button>
            </div>
            <div className="modal-body">
                <h3>{context === 'edit' ? `Edit data of ${employeeToEdit?.ENAME}` : 'Add new Employee'}  </h3>
                <Form onSubmit={(e:SyntheticEvent<HTMLFormElement>)=>{ handleSubmit(e) }}>
                        <div className="mb-4">
                            <Form.Label htmlFor="input-name">Name *</Form.Label>
                            <Form.Control type="text" value={nameEmployee} name="input-title" id="input-name" required onChange={(e)=>{dispatch(setName(e.target.value))}}/>
                        </div>
                        <div className="mb-4">
                            <Form.Label htmlFor="input-sal">Sal *</Form.Label>
                            <Form.Control type="text" value={sal} name="input-title" id="input-sal" required onChange={(e)=>{dispatch(setSal(e.target.value))}}/>
                        </div>
                        <div className="mb-4">
                            <Form.Label htmlFor="input-com">Com *</Form.Label>
                            <Form.Control type="text" value={com} name="input-title" id="input-com" required onChange={(e)=>{dispatch(setCom(e.target.value))}}/>
                        </div>
                        <div className="mb-4">
                            <Form.Label htmlFor="input-descriptif">Job *</Form.Label>
                            <Form.Select id="input-college" required value={job} onChange={(e) => {
                                dispatch(setJob(e.target.value))
                            }}>
                                <option value="">Choose...</option>
                                <option value="CLERK">CLERK</option>
                                <option value="SALESMAN">SALESMAN</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ANALYST">ANALYST</option>
                                <option value="PRESIDENT">PRESIDENT</option>
                            </Form.Select>
                        </div>
                        <div className="mb-4">
                            <Form.Label htmlFor="input-manager">Manager *</Form.Label>
                            <Form.Select id="input-manager" required value={manager} onChange={(e) => {
                                dispatch(setManager(e.target.value))
                            }}>
                                <option value="">Choose...</option>
                                {employees.map((employee, index)=>{
                                    return <option key={index} value={employee.EMPNO}>{employee.ENAME}</option>
                                })}
                            </Form.Select>
                        </div>
                        <div className="mb-4">
                            <Form.Label htmlFor="input-department">Department *</Form.Label>
                            <Form.Select id="input-department" required value={department} onChange={(e) => {
                                dispatch(setDepartment(e.target.value))
                            }}>
                                <option value="">Choose...</option>
                                {departments.map((department, index)=>{
                                    return <option key={index} value={department.deptno}>{department.dname}</option>
                                })}
                            </Form.Select>
                        </div>
                        <div className="text-center mt-6">
                            <button type="submit" className="btn btn-light">
                                Enregistrer
                            </button>
                        </div>
                </Form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
                    dispatch(setShowModalEditEmployee(false))
                    dispatch(setEmployeeToEdit(null))
                }}>Close</button>
            </div>
            </div>
    </Modal>
  )
}
