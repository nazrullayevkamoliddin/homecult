import { Group, Text, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useStyles } from "./btm-banner.styles"
import React from 'react'
import Copyright from "./copyright"

interface BannerProps {
    childComp?: React.ReactElement
}

const BtmBanner = ({ childComp }: BannerProps) => {
    const { classes } = useStyles()
    const theme = useMantineTheme()
    const currentYear = new Date(Date.now()).getFullYear()
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const paddingX = isMobile ? 30 : 120
    const textSize = isMobile ? 28 : 56
    return (
        <>
            <div className={classes.wrapper}>
                <Group sx={{ height: '100%' }} px={paddingX} align={'center'} position={'apart'}>
                    <Text size={textSize} weight={200} color={'white'}>HAVE AN IDEA? <br /> TELL US</Text>
                    <Text align="center" className={classes.req_btn} size={'sm'}>DROP <br /> REQUEST</Text>
                </Group>
            </div>
            {childComp}
            <Copyright />
        </>
    )
}

export default BtmBanner