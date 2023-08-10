
import SocialMedia from "@/Components/SocialMedia";
import styles from "./page.module.css";
import Profile from "@/Components/Profile";
import Text from "@/Components/Text";


export default function Home() {
  return (

    <div className={styles.home}>
      <Profile />
      <Text />
      <div className={styles.socialmedia}>
        <SocialMedia
          textname="DiSCORD"
          link="https://discord.gg/7TjQPJhVvz"
          image="/img/Discord.svg"
          text="caroldg"
          target="_blank"
        />
        <SocialMedia
          textname="INSTAGRAM"
          link="https://instagram.com/carol_dgt?igshid=NGExMmI2YTkyZg=="
          image="/img/Instagram.svg"
          text="carol_dgt"
          target="_blank"
        />
        <SocialMedia
          textname="GITHUB"
          link="https://github.com/Caroldgt"
          image="/img/GitHub.svg"
          text="Caroldgt"
        />
      </div>
    </div>
  )
}
