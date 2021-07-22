import '../Slider/slider.css'
import InstagramPicture from '../../assets/img/instagram-picture.jpg';
import InstagramLogo from '../../assets/img/Instagram-logo.png';
import HeroImg1 from '../../assets/img/hero-image-1.jpg';
import HeroImg2 from '../../assets/img/hero-image-2.jpg';
import HeroImg3 from '../../assets/img/hero-image-3.jpg';
import HeroImg4 from '../../assets/img/hero-image-4.jpg';
import HeroImg5 from '../../assets/img/hero-image-5.jpg';
import HeroImg6 from '../../assets/img/hero-image-6.jpg';


const Slider = () => {
    return (<section className="Slider">
        <div className="my-hero-container container">
            <div className="my-hero-container-first-col container">
                <div className="box"><img className="hero-first-image hero-image" src={HeroImg1} alt="splited-pic-as-background"/></div>
                <div className="box"><img className="hero-second-image hero-image" src={HeroImg2} alt="splited-pic-as-background"/></div>
                <div className="box"><img className="hero-third-image hero-image" src={HeroImg3} alt="splited-pic-as-background"/></div>
            </div>
            <div className="my-hero-container-second-col container">
            <div className="box"><img className="hero-fourth-image hero-image" src={HeroImg4} alt="splited-pic-as-background"/></div>
            <div className="box"><img className="hero-fifth-image hero-image" src={HeroImg5} alt="splited-pic-as-background"/></div>
            <div className="box"><img className="hero-sixth-image hero-image" src={HeroImg6} alt="splited-pic-as-background"/></div>
            </div>
            <a href="https://www.instagram.com/latiendademates/"><img src={InstagramLogo} className="instagram-logo" alt="instagram-logo-for-banner"/></a>
            <div className="my-hero-profile-info container">
            <a href="https://www.instagram.com/latiendademates/"><img src={InstagramPicture} alt="instagram-la-tienda-de-mates-logo-img"/></a>
            <ul className="profile-items-list">
                <a href="https://www.instagram.com/latiendademates/"><h2 className="profile-info-title">latiendadeMates</h2></a>
                <li className="profile-info-item"> <p>0</p> <p>publicaciones</p> </li>
                <li className="profile-info-item"> <p>0</p> <p>seguidores</p> </li>
                <li className="profile-info-item"> <p>0</p> <p>seguidos</p> </li>
                <li className="profile-info-item"> <button>Contactar</button></li>
                <li className="profile-info-item"> <button>Seguir</button></li>
            </ul>
            <div className="profile-info-description">
                <h2>𝐌𝐚𝐭𝐞𝐬 𝐩𝐢𝐧𝐭𝐚𝐝𝐨𝐬 𝐚 𝐦𝐚𝐧𝐨🧉🎨</h2>
                <ul>
                    <li>▸Mates personalizados por PEDIDO</li>
                    <li>▸Entregas en zona centro de NQN</li>
                    <li>▸Envios a todo el país 🚚🇦🇷</li>
                    <li>▸Todos los medios de pago 💳💵</li>
                    <li>⤹⤹Link de WhatsApp wa.me/542995242031</li>
                </ul>
            </div>

            </div>
        </div>
            </section>)}
export default Slider;