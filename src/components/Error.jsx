import { useRouteError } from "react-router";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h3>Status code : {err.status} </h3>
            <h3>{err.data} </h3>
        </div>
    )
}

export default Error;