import type {EmployeeInterface} from '../../api/EmployeeAPI'

export default function ManagerLine({employee}: {employee: EmployeeInterface}) {

  return (
    <tr>
        <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">{employee.ENAME}</a></td>
        <td><span className="badge badge-soft-success mb-0">{employee.JOB}</span></td>
        <td>{employee.subordinates?.length}</td>
        <td>{employee.directAndIndirectSubordinates?.length}</td>
    </tr>
  )
}
