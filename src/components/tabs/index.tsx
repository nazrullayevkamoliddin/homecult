import { TabsProps, Tabs as UnstyledTabs } from '@mantine/core';
import { useStyles } from './tabs.styles';

interface UnstyledTabProps extends TabsProps {
  space?: string;
}

const Tabs = (props: UnstyledTabProps) => {
  const { classes } = useStyles({ space: props.space });
  return (
    <UnstyledTabs
      classNames={{
        root: classes.root,
        tabLabel: classes.tabLabel,
        tabsList: classes.tabsList,
        panel: classes.panel,
        tab: classes.tab,

      }}
      {...props}
    />
  );
};

export default Tabs;
