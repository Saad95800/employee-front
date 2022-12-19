import EmployeeLine from './EmployeeLine'
import { EmployeeInterface } from '../../api/UserAPI'
import {useAppSelector} from '../../redux/Hooks'
import type {RootState} from '../../redux/Store'

export default function ListEmployee({employees} : {employees: EmployeeInterface[]}) {

  return (
    <div className="row">
        <div className="col-lg-12">
            <div className="">
                <div className="table-responsive">
                    <table className="table project-list-table table-nowrap align-middle table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Job</th>
                                <th scope="col">Manager</th>
                                <th scope="col">Hire date</th>
                                <th scope="col">Department</th>
                                <th scope="col" style={{width: '200px'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {employees?.map((employee:EmployeeInterface, index:number)=>{
                          return <EmployeeLine employee={employee} />
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
