import FacebookLogo from "../../assets/img/icons/facebook.png"
import YoutubeLogo from "../../assets/img/icons/youtube.png"
import InstagramLogo from "../../assets/img/icons/instagram.png"
import "./Footer.css"

export function Footer() {
    return(
        <footer className="footer">
            <p>Associação Paulistana - UCB</p>
            <p>Fundado em 1982</p>
            <span>
                <a href="#"><img src={InstagramLogo} alt="" /></a>
                <a href="#"><img src={FacebookLogo} alt="" /></a>
                <a href="#"><img src={YoutubeLogo} alt="" /></a>
            </span>
        </footer>
    )
}