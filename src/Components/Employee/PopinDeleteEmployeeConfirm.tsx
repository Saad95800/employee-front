import Modal from 'react-bootstrap/Modal'
import {useAppDispatch, useAppSelector} from '../../redux/Hooks'
import { setShowModalDeleteEmployeeConfirm, setEmployeeToDelete } from '../../redux/Employee/EmployeeSlice'
import type {RootState} from '../../redux/Store'
import { deleteEmployee, fetchEmployees } from '../../api/EmployeeAPI'
import { displayMessage } from '../../redux/Message/MessageSlice'

export default function PopinDeleteEmployeeConfirm() {

    const dispatch = useAppDispatch()
    const showModalDeleteEmployeeConfirm = useAppSelector((state: RootState) => state.employee.showModalDeleteEmployeeConfirm)
    const employeeToDelete = useAppSelector((state: RootState) => state.employee.employeeToDelete)

    const deleteEmployeeAction = async ()=>{
        if(employeeToDelete !== null){
            let result = await dispatch(deleteEmployee(employeeToDelete))
            console.log(result)
            if(result.meta.requestStatus === 'fulfilled'){   
                dispatch(displayMessage({text: "Employee successfully removed !", status: 'success'}))    
                dispatch(fetchEmployees({job: ''}))        
            }else{
                dispatch(displayMessage({text: "Error on deleting the employee", status: 'error'}))
            }
        }
        dispatch(setShowModalDeleteEmployeeConfirm(false))
        dispatch(setEmployeeToDelete(null))
    }
  return (
    <Modal show={showModalDeleteEmployeeConfirm} className="modal-form" id="employeeModal" aria-labelledby="employeeModalLabel" aria-hidden="true">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Delete employee</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{
                    dispatch(setShowModalDeleteEmployeeConfirm(false))
                    dispatch(setEmployeeToDelete(null))
                }}></button>
            </div>
            <div className="modal-body">
                <h4>Are you sure you want to delete this employee</h4>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>{
                    deleteEmployeeAction()
                }}>Confirm</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{
                    dispatch(setShowModalDeleteEmployeeConfirm(false))
                    dispatch(setEmployeeToDelete(null))
                }}>Cancel</button>
            </div>
            </div>
    </Modal>
  )
}
