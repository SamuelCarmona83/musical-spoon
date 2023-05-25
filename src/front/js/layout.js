import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import Home from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";
import { NotFound } from "./pages/notFound";
import { Publish } from "./pages/publish";
import { FloorDetail } from "./pages/floorDetails";
import { Profile } from "./pages/profile";
import { NewFloor } from "./pages/newFloor";
import { ExploreFloors } from "./pages/exploreFloors";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />

                        <Route element={<ExploreFloors />} path="/explore" />

                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Publish />} path="/publicar" />
                        <Route element={<Profile />} path="/profile/:id" />
                        <Route element={<NewFloor />} path="/new/piso/:id" />
                        <Route element={<FloorDetail />} path="/piso/:id" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<NotFound />} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
