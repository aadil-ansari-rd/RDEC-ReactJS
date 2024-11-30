import { Button } from "react-bootstrap"
import {  useNavigate } from 'react-router-dom'
function Comment() {
    const navigate = useNavigate()
    function addBookRoute() {
        navigate('/anayltics')
    }
    return (
        <div>
             <Button variant="primary" onClick= { addBookRoute }>Add Book</Button>
        </div>
    )
}
export default Comment