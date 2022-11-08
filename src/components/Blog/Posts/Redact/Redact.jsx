import { useNavigate, useParams } from "react-router-dom";

const Redact = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <p>redact {id}</p>
            <button onClick={goBack}>GO BACK</button>
        </div>
    )
}

export { Redact };