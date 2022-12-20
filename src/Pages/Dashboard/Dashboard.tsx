import {useEffect} from 'react'
import { fetchEmployees } from '../../api/UserAPI'
import ListManager from '../../Components/Employee/ListManager'
import {useAppDispatch, useAppSelector} from '../../redux/Hooks'
import type {RootState} from '../../redux/Store'

export default function Home() {

    const dispatch = useAppDispatch()
    const employees = useAppSelector((state: RootState) => state.employee.employees)

    useEffect(() => {
        dispatch(fetchEmployees({job: 'manager'}))
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container mt-3">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <h5 className="card-title">Manager List <span className="text-muted fw-normal ms-2">({employees?.length})</span></h5>
                    </div>
                </div>
            </div>
            <ListManager employees={employees} />
        </div>
    )
}
