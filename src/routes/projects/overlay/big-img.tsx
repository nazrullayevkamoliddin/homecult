import { Group, Stack, Text } from "@mantine/core"
import { useRouter } from "next/router";
import { BgHome1, BgHome2 } from "../../../components/assets";
import { useStyles } from "../projects.styles"

interface BigImgProps {
    marginTSize: number;
    primTextSize: number;
    PRIMARY_COL_WIDTH: number | string
    PRIMARY_COL_HEIGHT: number
    imgSrc?: string
}

const BigImg = ({ PRIMARY_COL_WIDTH, PRIMARY_COL_HEIGHT, marginTSize, primTextSize }: BigImgProps) => {
    const { classes } = useStyles()
    const router = useRouter()
    const navigate = () => {
        router.push('/projects/1')
    }
    return (
        <div onClick={navigate} className={classes.overWrap} style={{ width: PRIMARY_COL_WIDTH, height: PRIMARY_COL_HEIGHT }}>
            <div style={{ width: PRIMARY_COL_WIDTH, height: '100%' }} className={classes.overlay}>
                <Stack sx={{ height: "100%" }} align={"center"} justify="space-between">
                    <Text mt={marginTSize} size={primTextSize} weight={200} color={"white"} align="center">PENTHOUSE LA</Text>
                    <Group mb={20} >
                        <Text size={'sm'} color={"white"} align="center">KYIV</Text>
                        <Text size={'sm'} color={"white"} align="center">230 SQ.M.</Text>
                        <Text size={'sm'} color={"white"} align="center">2019</Text>
                    </Group>
                </Stack>
            </div>
            <img width={PRIMARY_COL_WIDTH} height={PRIMARY_COL_HEIGHT} style={{ objectFit: 'cover' }} src={BgHome1.src} />
        </div>
    )
}

export default BigImg