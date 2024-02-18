import {Outlet} from "react-router-dom";
import {Header} from "./components/header/header.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";


function App(): React.ReactElement {
    const {errorMessage, hasError} = useSelector((state: RootState) => state.error);
    if (hasError) {
        throw new Error(errorMessage);
    }
    return (
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
    )
}

export default App
