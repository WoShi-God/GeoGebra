import Login from "../login/Log";
import Register from "../login/Reg";
import { Routes,Route,Navigate} from 'react-router-dom';
import NotFound from "../components/notfound/notfound";
import React,{lazy, Suspense} from "react";
import Fallback from "../components/fallback";
const Teacher =lazy(()=>import("./authRoute"))
const Student = lazy(()=>import("./authRoute2"))
// 各个主页面之间的路由
export default function IndexRoute() {
    return (
        <Routes>
            <Route path="/"  element={<Navigate to='/login'/>}/>
            <Route path='/login' element={<Login />}   />
            <Route path="/register" element={<Register/>} />
            //老师与学生路由在authRoute那边进行判断返回组件,无localStore则重定向login
            <Route path='/teacher' element = {<Suspense fallback={<Fallback/>}><Teacher/></Suspense>}/>
            <Route path='/student' element = {<Suspense fallback={<Fallback/>}><Student/></Suspense>}/>
            {/* 无此路径页面 */}
            <Route path="*" element={ <NotFound/> } />
        </Routes>  
    )
}
   

