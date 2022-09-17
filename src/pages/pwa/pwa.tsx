import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Stack } from "ui";
import { Header } from "components";

const pwaIntroPagePassed = () => {
    localStorage.setItem("pwaIntroPassed", "true");
};

function Pwa() {
    return (
        <div>
            <Header title="Pwa Intro Page" button={"menu"}>
                <Link to="/quran">
                    <button onClick={pwaIntroPagePassed}>Go to Quran</button>
                </Link>
                <Link to="/">
                    <button>Go to Intro</button>
                </Link>
            </Header>
            <Container maxWidth={"sm"}>
                <h1>Container</h1>
            </Container>
            <Container maxWidth={"sm"}>
                <h1>Container</h1>
            </Container>
            <Container maxWidth={"sm"} style={{ padding: "20px" }}>
                <h1>Container</h1>
            </Container>
            <Container>
                <h1>Container</h1>
            </Container>
            <Container maxWidth={"sm"}>
                <Stack
                    style={{
                        justifyContent: "center",
                        gap: "3rem",
                        padding: "2rem",
                    }}
                >
                    <div>Stack 1</div>
                    <div>Stack 2</div>
                    <div>Stack 3</div>
                </Stack>
            </Container>
            <Container maxWidth={"sm"}>
                <Grid>
                    <Grid>Grid A</Grid>
                    <Grid>Grid B</Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Pwa;
