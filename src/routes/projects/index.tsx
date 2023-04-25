import { Center, Container, Grid, Group, SimpleGrid, Skeleton, Stack, Tabs, Text, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import StyledTabs from "../../components/tabs"
import { BgHome1, BgHome2 } from "../../components/assets";
import { useStyles } from "./projects.styles";
import BtmBanner from "./btm-banner";
import BigImg from "./overlay/big-img";
import SmallImg from "./overlay/small-img";

const Projects = () => {
    const theme = useMantineTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);
    const PRIMARY_COL_HEIGHT = isMobile ? 400 : 655;
    const PRIMARY_COL_WIDTH = '100%';
    const { classes } = useStyles()
    const marginTSize = isMobile ? 120 : 270
    const secondaryMarginT = 135
    const primTextSize = isMobile ? 42 : 56
    const paddingX = isMobile ? 30 : 90
    const SECONDARY_COL_HEIGHT = isMobile ? 400 : PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
    return (
        <div className={classes.container}>
            <Container fluid size={'xl'} px={paddingX}>
                <Center mt={180} mb={100}>
                    <Text align="center" className={classes.title} size={56} weight={300}>OUR PROJECTS</Text>
                </Center>
                <StyledTabs mb={64} defaultValue="all">

                    <Tabs.List >
                        <Tabs.Tab value="all" >ALL</Tabs.Tab>
                        <Tabs.Tab value="residential">RESEDENTIAL</Tabs.Tab>
                        <Tabs.Tab value="commercial">COMMERCIAL</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="all" pt="xs">

                        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: theme.breakpoints.xl, cols: 1 }]}>
                            <BigImg PRIMARY_COL_HEIGHT={PRIMARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} marginTSize={marginTSize} primTextSize={primTextSize} />
                            <Grid gutter="md">
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                            </Grid>
                        </SimpleGrid>

                        <SimpleGrid mt={20} cols={2} spacing="md" breakpoints={[{ maxWidth: theme.breakpoints.xl, cols: 1 }]}>
                            <Grid gutter="md" p={0}>
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                            </Grid>

                            <BigImg PRIMARY_COL_HEIGHT={PRIMARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} marginTSize={marginTSize} primTextSize={primTextSize} />

                        </SimpleGrid>
                    </Tabs.Panel>

                    <Tabs.Panel value="residential" pt="xs">
                        <SimpleGrid mt={20} cols={2} spacing="md" breakpoints={[{ maxWidth: theme.breakpoints.xl, cols: 1 }]}>
                            <Grid gutter="md" p={0}>
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                            </Grid>

                            <BigImg PRIMARY_COL_HEIGHT={PRIMARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} marginTSize={marginTSize} primTextSize={primTextSize} />

                        </SimpleGrid>
                    </Tabs.Panel>

                    <Tabs.Panel value="commercial" pt="xs">
                        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: theme.breakpoints.xl, cols: 1 }]}>
                            <BigImg PRIMARY_COL_HEIGHT={PRIMARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} marginTSize={marginTSize} primTextSize={primTextSize} />
                            <Grid gutter="md">
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <SmallImg SECONDARY_COL_HEIGHT={SECONDARY_COL_HEIGHT} PRIMARY_COL_WIDTH={PRIMARY_COL_WIDTH} secondaryMarginT={secondaryMarginT} />
                                </Grid.Col>
                            </Grid>
                        </SimpleGrid>
                    </Tabs.Panel>
                </StyledTabs>
            </Container>
            <BtmBanner />
        </div>
    )
}

export default Projects