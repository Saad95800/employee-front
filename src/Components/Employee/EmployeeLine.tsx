import moment from 'moment'
import type {EmployeeInterface} from '../../api/UserAPI'
import { setEmployeeSelected, setEmployeeToEdit, setShowModalEmployee, setShowModalEditEmployee, setContext } from '../../redux/Employee/EmployeeSlice'
import { useAppDispatch } from '../../redux/Hooks'

export default function EmployeeLine({employee}: {employee: EmployeeInterface}) {
    const dispatch = useAppDispatch()
  return (
    <tr>
        <td onClick={()=>{
            dispatch(setShowModalEmployee(true))
            dispatch(setEmployeeSelected(employee))
        }}><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">{employee.ENAME}</a></td>
        <td><span className="badge badge-soft-success mb-0">{employee.JOB}</span></td>
        <td> {(employee.MGR !== null && employee.MGR !== '') && <><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">{employee.MGR}</a></>}</td>
        <td>{moment(employee.HIREDATE).format('l')}</td>
        <td>{employee.DNAME}</td>
        <td>{employee.SAL}</td>
        <td>{employee.COMM}</td>
        <td>
            <ul className="list-inline mb-0">
                <li className="list-inline-item">
                    <a onClick={()=>{
                            dispatch(setContext('edit'))
                            dispatch(setShowModalEditEmployee(true))
                            dispatch(setEmployeeToEdit(employee))
                        }}
                        href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                </li>
            </ul>
        </td>
    </tr>
  )
}
