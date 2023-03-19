import { HashRouter } from "react-router-dom";
import IndexRoute from "./router";
export default function App() {
    return (
        <HashRouter>
            {/* 路由组件 */}
           <IndexRoute/>
        </HashRouter>
    );
}

