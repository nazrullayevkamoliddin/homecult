import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@modulz/radix-icons"
import { useStyles } from "./slider.styles"

const NavBtnNext = ({ classname }: { classname: string }) => {
    const { classes } = useStyles()
    return (
        <div className={classname}>
            <div className={classes.rightNav}>
                <ChevronRightIcon className={classes.icon} width={30} height={30} color="rgba(255,255,255,0.5)" />
            </div>
        </div>
    )
}
const NavBtnPrev = ({ classname }: { classname: string }) => {
    const { classes } = useStyles()
    return (
        <div className={classname}>
            <div className={classes.leftNav}>
                <ChevronLeftIcon className={classes.icon} width={30} height={30} color="rgba(255,255,255,0.5)" />
            </div>
        </div>
    )
}

export { NavBtnNext, NavBtnPrev }