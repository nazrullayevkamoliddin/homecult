import { Center, Container, Group, Stack, Text, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useRouter } from "next/router"
import { BgHome1, BgHome2 } from "../../../components/assets"
import BtmBanner from "../btm-banner"
import NextProject from "./next-project"
import { useStyles } from "./single-project.styles"

const SingleProject = ({ id }: { id: number }) => {
    const { classes } = useStyles()
    const theme = useMantineTheme()
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const primTextSize = isMobile ? 28 : 56
    const paddingX = isMobile ? 20 : 200
    const router = useRouter()
    const PRIMARY_COL_HEIGHT = isMobile ? 400 : 655;
    return (
        <div style={{ width: '100%', height: "100%" }}>
            <Container px={paddingX} className={classes.container} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${id % 2 === 1 ? BgHome1.src : BgHome2.src})` }} fluid>
                <Stack sx={{ height: "100%" }} justify={'flex-end'} pb={isMobile ? 30 : 100}>
                    <Text pl={30} size={14} color={"white"} className={classes.backTo} onClick={() => { router.push('/projects') }}>BACK TO PORTFOLIO</Text>
                    <Text className={classes.lightText} weight={200} size={primTextSize}>PENTHOUSE <br /> LA</Text>
                    <Group pl={30} mt={40}>
                        <Stack>
                            <Text size={14} weight={500} color="white" mb={5}>TEAM</Text>
                            <Text size={14} className={classes.lightText}>Capitan A</Text>
                            <Text size={14} className={classes.lightText}>John Doe</Text>
                            <Text size={14} className={classes.lightText}>Alex Martin</Text>
                        </Stack>
                        <Stack>
                            <Text size={14} weight={500} color="white" mb={5}>PROJECT SPECIFICATION</Text>
                            <Text size={14} className={classes.lightText}>Square <span className={classes.redText}>230sq.m</span></Text>
                            <Text size={14} className={classes.lightText}>Year <span className={classes.redText}>2018</span></Text>
                            <Text size={14} className={classes.lightText}>City <span className={classes.redText}>Kyiv</span></Text>
                        </Stack>
                    </Group>
                </Stack>
            </Container>
            <Stack mt={90} mb={240} spacing={50}>
                <Text align="center" size={28} weight={200}>PENTHOUSE LA</Text>
                <Text weight={200} size={14} align="center">Penthouse LA</Text>
            </Stack>
            <Container size={'xl'}>
                <img width={'100%'} height={PRIMARY_COL_HEIGHT} className={classes.room} src={id % 2 === 1 ? BgHome1.src : BgHome2.src} alt={'img'} />
                <img width={'100%'} height={PRIMARY_COL_HEIGHT} className={classes.room} src={id % 2 === 0 ? BgHome1.src : BgHome2.src} alt={'img'} />
                <img width={'100%'} height={PRIMARY_COL_HEIGHT} className={classes.room} src={id % 2 === 1 ? BgHome1.src : BgHome2.src} alt={'img'} />
                <img width={'100%'} height={PRIMARY_COL_HEIGHT} className={classes.room} src={id % 2 === 0 ? BgHome1.src : BgHome2.src} alt={'img'} />
            </Container>
            <BtmBanner childComp={<><NextProject id={id} /></>} />
        </div>
    )

}

export default SingleProject