import ManagerLine from './ManagerLine'
import { EmployeeInterface } from '../../api/UserAPI'
import {useAppSelector} from '../../redux/Hooks'
import type {RootState} from '../../redux/Store'

export default function ListManager({employees} : {employees: EmployeeInterface[]}) {

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
                                <th scope="col">Direct subordonates number</th>
                                <th scope="col">Direct and indirect subordonates number</th>
                            </tr>
                        </thead>
                        <tbody>
                        {employees?.map((employee:EmployeeInterface, index:number)=>{
                          return <ManagerLine employee={employee} />
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
