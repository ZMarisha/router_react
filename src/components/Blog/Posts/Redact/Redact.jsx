import React from "react";
import { useParams } from "react-router-dom";

const Redact = () => {

    const {id} = useParams()
    return (
        <div>
            <p>redact {id}</p>
        </div>
    )
}

export {Redact};