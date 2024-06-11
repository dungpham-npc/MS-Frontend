import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import CommunicationLinks from "../components/CommunicationLinks";

function MainLayout() {
    return (
        <Stack sx={{ minHeight: "100vh" }}>
            <MainHeader />
            <Box sx={{ mt: 10, flexGrow: 1 }}>
                <Outlet />
            </Box>
            <MainFooter />
            <CommunicationLinks />
        </Stack>
    );
}

export default MainLayout;
