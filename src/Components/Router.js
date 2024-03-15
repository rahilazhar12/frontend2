import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminView from "./Adminview";

const Webrouting = () => {
    return (
        <>
            <>

                <Routes>

                    <Route path="/" element={<AdminView />} />

                </Routes>
            </>
        </>
    );
};

export default Webrouting;
