import { Container, Group, Stack, Text, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";
import { BgHome1, BgHome2 } from "../../../../components/assets";
import { useStyles } from "./next-project.styles";

const NextProject = ({ id }: { id: number }) => {
    const { classes } = useStyles()
    const router = useRouter()
    const navigate = () => {
        router.push(`/projects/${id + 1}`)
    }
    const theme = useMantineTheme()
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const primTextSize = isMobile ? 24 : 56
    return (
        <Container size={"xs"} px={'xl'}>
            <div onClick={navigate} className={classes.overWrap}>
                <div style={{ width: '100%', height: '100%' }} className={classes.overlay}>
                    <Stack sx={{ width: '100%', height: '100%' }} align="center" justify={"center"}>
                        <Text size={primTextSize} weight={200} className={classes.text} align="center">NEXT PROJECT</Text>
                    </Stack>
                </div>
                <img className={classes.img} src={id % 2 == 0 ? BgHome1.src : BgHome2.src} />
            </div>
        </Container>
    )
}

export default NextProject