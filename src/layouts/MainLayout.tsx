import { Outlet } from "react-router-dom"

const MainLayout = () => {


    return (
        <div className="w-full flex flex-col items-center ">
            <Outlet />
        </div>
    )
}

export default MainLayout;