import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import { HomePage, MapPage, CvPage, ProjectsPage, SportsPage } from "../pages";

const RoutingMain = () => {
    return (
        <BrowserRouter>
            <header className="container-fluid px-0">
                <MainNavigation></MainNavigation>
            </header>
            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="map-page" element={<MapPage />}></Route>
                    <Route path="cv-page" element={<CvPage />}></Route>
                    <Route
                        path="projects-page"
                        element={<ProjectsPage />}
                    ></Route>
                    <Route path="sports-page" element={<SportsPage />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default RoutingMain;
