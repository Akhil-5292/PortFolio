import Education from '../Education/Education';
import Navbar from '../Navbar/Navbar';
import style from './About.module.css'
import PinDropIcon from '@mui/icons-material/PinDrop';
export default function About(){
    return(
        <div className={style.wrapper}>
            <div className={style.nav}><Navbar/></div>
            
            <h1 className={style.heading}>Location <PinDropIcon className={style.icon}/></h1>
        <div className={style.location}> 
           <h1 >I am from Bahraich, UP</h1>
           {/* <img className={style.img} src="https://cache.careers360.mobi/media/colleges/staticmap/2022/5/24/10501.png" alt='pic'/> */}
           <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28292.95294280361!2d81.60232690000001!3d27.574328899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999a957005f1d65%3A0x5df751d83e3a7717!2sBahraich%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681377506809!5m2!1sen!2sin" 
           width="600" height="400" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" >
           </iframe>

        </div>
        <div className={style.education}>
            <Education/>
        </div>
        </div>
    )
}