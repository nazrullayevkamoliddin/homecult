import { Group, Text, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";

const Copyright = ({ withPadding = true }: { withPadding?: boolean }) => {
    const theme = useMantineTheme()
    const currentYear = new Date(Date.now()).getFullYear()
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const paddingX = isMobile ? 30 : 120
    return (
        <Group my={50} px={withPadding ? paddingX : isMobile ? paddingX : 0} position={"apart"}>
            <Text size={14} weight={500} color={'gray'} >© {currentYear}. All rights reserved</Text>
            <Text size={14} weight={500} color={'gray'} >Made with love</Text>
        </Group>
    )
}

export default Copyright