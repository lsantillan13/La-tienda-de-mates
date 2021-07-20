import '../Slider/slider.css'
import instagramPicture from '../../assets/img/instagram-picture.jpg';
import instagramLogo from '../../assets/img/Instagram-logo.png';
import heroImg1 from '../../assets/img/hero-image-1.jpg';
import heroImg2 from '../../assets/img/hero-image-2.jpg';
import heroImg3 from '../../assets/img/hero-image-3.jpg';
import heroImg4 from '../../assets/img/hero-image-4.jpg';
import heroImg5 from '../../assets/img/hero-image-5.jpg';
import heroImg6 from '../../assets/img/hero-image-6.jpg';


const Slider = () => {
    return (<section className="Slider">
        <div className="my-hero-container container">
            <div className="my-hero-container-first-col container">
                <div className="box"><img className="hero-first-image hero-image" src={heroImg1} alt="splited-pic-as-background"/></div>
                <div className="box"><img className="hero-second-image hero-image" src={heroImg2} alt="splited-pic-as-background"/></div>
                <div className="box"><img className="hero-third-image hero-image" src={heroImg3} alt="splited-pic-as-background"/></div>
            </div>
            <div className="my-hero-container-second-col container">
            <div className="box"><img className="hero-fourth-image hero-image" src={heroImg4} alt="splited-pic-as-background"/></div>
            <div className="box"><img className="hero-fifth-image hero-image" src={heroImg5} alt="splited-pic-as-background"/></div>
            <div className="box"><img className="hero-sixth-image hero-image" src={heroImg6} alt="splited-pic-as-background"/></div>
            </div>
            <a href="https://www.instagram.com/latiendademates/"><img src={instagramLogo} className="instagram-logo" alt="instagram-logo-for-banner"/></a>
            <div className="my-hero-profile-info container">
            <a href="https://www.instagram.com/latiendademates/"><img src={instagramPicture} alt="instagram-la-tienda-de-mates-logo-img"/></a>
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
                    <li>⤹ ⤹ Link de WhatsApp
wa.me/542995242031</li>
                </ul>
            </div>

            </div>
        </div>
            </section>)}
export default Slider;