import { useRouter } from "next/router"
import SingleProject from "../../../routes/projects/single-project"

const FullProject = () => {
    const router = useRouter()

    return (
        <>
            <SingleProject id={Number(router.query.projectId)} />
        </>
    )
}

export default FullProject