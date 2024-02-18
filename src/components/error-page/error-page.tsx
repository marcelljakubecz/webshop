import './error-page.scss';
import {useRouteError} from "react-router-dom";
import {getRouterErrorMessage} from "../../utils/utils.ts";

export const ErrorPage = (): React.ReactElement => {
    const error = useRouteError();
    return (
        <div className="error-container">
            <h1 className="title">Error</h1>
            <p className="error-message">{getRouterErrorMessage(error)}</p>
        </div>
    );
}