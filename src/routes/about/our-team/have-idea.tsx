import { Container, Stack, Text, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import LoginModal from "../../../components/header/login";
import Copyright from "../../projects/btm-banner/copyright";
import { useStyles } from "./our-team.styles"

const HaveAnIdea = () => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const { classes } = useStyles()
    const { toggleColorScheme } = useMantineColorScheme();
    const [openReq, setOpenReq] = useState(false);

    return (
        <Container sx={{ height: "100vh" }} size={'lg'}>
            <Stack spacing={30} justify={'center'} align="" sx={{ width: 'max-content', height: "calc(100vh - 122px)", marginLeft: 'auto' }}>
                <Text size={isMobile ? 32 : 56} weight={200} align={"left"} color="white">HAVE AN IDEA? <br /> TELL US.</Text>
                <Text onClick={() => { setOpenReq(true); toggleColorScheme('dark') }} className={classes.dropText} color={'white'} size={13}>DROP REQUEST</Text>
            </Stack>
            <Copyright withPadding={false} />
            <LoginModal open={openReq} setOpen={setOpenReq} />
        </Container>
    )
}

export default HaveAnIdea