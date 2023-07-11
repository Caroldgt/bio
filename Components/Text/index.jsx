import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"


function Text() {
    return (
        <>
            <h2 className={styles.name}>
                Carol
            </h2>
            <div>
                <Link href={"#"} className={styles.portfolio}>
                    <p>futuro portfolio</p>
                </Link>
            </div>

        </>
    )
}

export default Text