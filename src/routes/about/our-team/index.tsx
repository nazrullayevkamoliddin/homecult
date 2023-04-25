import { Container, Group, Stack, Text, useMantineColorScheme } from "@mantine/core"
import { useState } from "react"
import LoginModal from "../../../components/header/login"
import { teamMembers } from "../slider/image-links"
import HaveAnIdea from "./have-idea"
import { useStyles } from "./our-team.styles"

const OurTeam = () => {
    const { classes } = useStyles()
    const [open, setOpen] = useState(false);
    const { toggleColorScheme } = useMantineColorScheme();

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    return (
        <div className={classes.wrapper}>
            <Container px={80} py={120} size={'lg'}>
                <Text className={classes.whiteText} mb={50} align="center" weight={200} size={56}>OUR TEAM</Text>
                <Group p={0} spacing={0} align={'center'}>
                    {arr.map((itm) => (
                        <div key={itm} className={classes.overWrap}>
                            <Stack justify={'flex-end'} mb={70} className={classes.overlay}>
                                <Text className={classes.whiteText} align="center" weight={200} size={18}>ALEXANDER</Text>
                                <Text className={classes.whiteText} mt={'15%'} align="center" size={12}>Architect</Text>
                            </Stack>
                            <img key={itm} src={itm % 3 === 0 ? teamMembers.first : teamMembers.second} className={classes.avatar} />
                        </div>
                    )
                    )}
                    <div className={classes.overWrap}>
                        <Stack justify="center" className={classes.joinBox} >
                            <Text onClick={() => { setOpen(true); toggleColorScheme('dark') }} className={classes.joinText} weight={200} align="center">JOIN <br /> THE TEAM</Text>
                        </Stack>
                    </div>
                </Group>
            </Container>
            <HaveAnIdea />
            <LoginModal open={open} setOpen={setOpen} joinTeam />
        </div >
    )
}

export default OurTeam