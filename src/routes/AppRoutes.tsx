import type React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout, BlankLayout } from "@layouts/index";
import Home from "@pages/Home";
import { AuthPage } from "@features/auth"

const AppRoutes: React.FC = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={"404"} />
        </Route>

        <Route element={<BlankLayout />} >
            <Route path="/register" element={<AuthPage />} />
        </Route>
    </Routes>
)

export default AppRoutes;