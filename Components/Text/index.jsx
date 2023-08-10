import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"


function Text() {
    return (
        <>
                <Link href={"https://portfolio-caroldgt.vercel.app/"} className={styles.portfolio}>
                    <p>Portfolio</p>
                </Link>
        </>
    )
}

export default Text