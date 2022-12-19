import Modal from 'react-bootstrap/Modal'
import {useAppDispatch, useAppSelector} from '../../redux/Hooks'
import { setEmployeeSelected, setShowModalEmployee } from '../../redux/Employee/EmployeeSlice'
import type {RootState} from '../../redux/Store'

export default function PopinEmployee() {

    const dispatch = useAppDispatch()
    const showModalEmployee = useAppSelector((state: RootState) => state.employee.showModalEmployee)
    const employeeSelected = useAppSelector((state: RootState) => state.employee.employeeSelected)

  return (
    <Modal show={showModalEmployee} className="modal-form" id="employeeModal" aria-labelledby="employeeModalLabel" aria-hidden="true">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Employee info</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <h3>{employeeSelected?.ENAME}</h3>
                <hr />
                <h2>Subordinates</h2>
                {employeeSelected?.subordinates?.map((subordinate)=>{
                    return <div className="d-flex">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><p>{subordinate.ENAME}</p>
                            </div>
                })}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
                    dispatch(setShowModalEmployee(false))
                }}>Close</button>
            </div>
            </div>
    </Modal>
  )
}
