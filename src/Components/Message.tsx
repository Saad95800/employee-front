import {useAppDispatch, useAppSelector} from "../redux/Hooks"
import {hideMessage} from '../redux/Message/MessageSlice'
import {Alert} from "react-bootstrap";

let myTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {});

export default function Message() {
    let text = useAppSelector((state) => state.message.text)
    const status = useAppSelector((state) => state.message.status)

    const dispatch = useAppDispatch()

    stopTimeout() // On arrete le timer précédent (s'il y en a un)
    startTimeout() // On redémare le timer pour durer 5 secondes

    function startTimeout() {
        myTimeout = setTimeout(() => {
            dispatch(hideMessage())
        }, 5000)
    }

    function stopTimeout() {
        clearTimeout(myTimeout);
    }

    if (text === '') {
        return <></>
    }

    return <div className="fixed-top">
        <div className="container mt-4">
            <Alert variant={status === 'error' ? 'danger' : status} onClose={() => {dispatch(hideMessage())}} dismissible>{text}</Alert>
        </div>
    </div>
}
