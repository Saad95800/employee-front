import {useEffect} from 'react'
import { fetchEmployees } from '../../api/EmployeeAPI';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks'
import type {RootState} from '../../redux/Store'
import PopinEmployee from '../../Components/Employee/PopinEmployee'
import ListEmployee from '../../Components/Employee/ListEmployee';
import PopinEditEmployeeForm from '../../Components/Employee/PopinEditEmployeeForm';
import { setContext, setShowModalEditEmployee } from '../../redux/Employee/EmployeeSlice';
import PopinDeleteEmployeeConfirm from '../../Components/Employee/PopinDeleteEmployeeConfirm';

export default function EmployeeList() {

  const dispatch = useAppDispatch();
  const employees = useAppSelector((state: RootState) => state.employee.employees)
  const context = useAppSelector((state: RootState) => state.employee.context)

  useEffect(() => {
      dispatch(fetchEmployees({job: ''}))
      return () => {
      }
      // eslint-disable-next-line
  }, [])

  return (
    <>

{/* start list */}
<PopinEmployee />
<PopinEditEmployeeForm context={context} />
<PopinDeleteEmployeeConfirm />

<div className="container mt-3">
    <div className="row align-items-center">
        <div className="col-md-6">
            <div className="mb-3">
                <h5 className="card-title">Employee List <span className="text-muted fw-normal ms-2">({employees?.length})</span></h5>
            </div>
        </div>
        <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3"> 
                <div>
                    <a href="/" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-primary" onClick={(e)=>{
                            e.preventDefault()
                            dispatch(setContext('add'))
                            dispatch(setShowModalEditEmployee(true))
                        }}><i className="bx bx-plus me-1"></i> Add New</a>
                </div>
            </div>
        </div>
    </div>
    <ListEmployee employees={employees} />
</div>

{/* End list */}







    </>
    
  )
}
