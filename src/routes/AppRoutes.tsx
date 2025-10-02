import type React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@layouts/index";
import Home from "@pages/Home";

const AppRoutes: React.FC = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={"404"} />
        </Route>
    </Routes>
)

export default AppRoutes;