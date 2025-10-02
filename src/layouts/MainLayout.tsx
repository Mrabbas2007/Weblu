import { Header } from "@components/index";
import { Outlet } from "react-router-dom"

const MainLayout = () => {


    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;