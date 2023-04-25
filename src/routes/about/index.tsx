import { Container, Stack, Text, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useStyles } from "./about.styles"
import OurTeam from "./our-team"
import AboutSlider from "./slider"

const AboutComp = () => {
    const { classes } = useStyles()
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    return (
        <div style={{ width: '100%', height: "100%" }}>
            <Container sx={{ height: '780px' }}>
                <Stack pt={isMobile ? 90 : 0} spacing={40} sx={{ height: "100%" }} align={'center'} justify="center">
                    <Text className={classes.greyText} align={'center'} weight={200} size={isMobile ? 'md' : 'xl'}>HOME IS YOUR PERFECT <br /> UNIVERSE.</Text>
                    <Text size={15} className={classes.greyText} align={'center'} weight={300} sx={{ maxWidth: '800px' }}>Do you know that the Danes and other Scandinavian people have such a thing as a “hygge”? This word describes incredible coziness, comfort, beauty, simplicity and harmony between soul, body and mind. And we have this concept of Homecult. In the pursuit of new trends, many designers forget about the main thing - comfort and coziness, but we will take care of this for sure . Along with the practicality and functionality of interior design, we will add even more heat. Now you can not only live in a beautiful house, you really want to cook, clean, invite guests, and even work. Meet the new generation cult - the cult of comfort, practicality and beauty in simplicity!</Text>
                </Stack>
            </Container>
            <Container sx={{ width: '100%' }} fluid p={0}>
                <AboutSlider />
            </Container>
            <OurTeam />
        </div>
    )
}

export default AboutComp