import { Group, Stack, Text } from "@mantine/core"
import { useRouter } from "next/router";
import { BgHome2 } from "../../../components/assets";
import { useStyles } from "../projects.styles"

interface SmallImgProps {
    secondaryMarginT: number;
    PRIMARY_COL_WIDTH: number | string
    SECONDARY_COL_HEIGHT: number
    imgSrc?: string
}

const SmallImg = ({ PRIMARY_COL_WIDTH, SECONDARY_COL_HEIGHT, secondaryMarginT }: SmallImgProps) => {
    const { classes } = useStyles()
    const router = useRouter()
    const navigate = () => {
        router.push('/projects/2')
    }
    return (
        <div onClick={navigate} className={classes.overWrap} style={{ width: PRIMARY_COL_WIDTH, height: SECONDARY_COL_HEIGHT }}>
            <div style={{ width: PRIMARY_COL_WIDTH, height: '100%' }} className={classes.overlay}>
                <Stack sx={{ height: "100%" }} align={"center"} justify="space-between">
                    <Text mt={secondaryMarginT} size={42} weight={200} color={"white"} align="center">APARTMENT</Text>
                    <Group mb={20} >
                        <Text size={'sm'} color={"white"} align="center">KYIV</Text>
                        <Text size={'sm'} color={"white"} align="center">230 SQ.M.</Text>
                        <Text size={'sm'} color={"white"} align="center">2019</Text>
                    </Group>
                </Stack>
            </div>
            <img width={PRIMARY_COL_WIDTH} height={SECONDARY_COL_HEIGHT} style={{ objectFit: 'cover' }} src={BgHome2.src} />
        </div>
    )
}

export default SmallImg