import style from './About.module.css'
import PinDropIcon from '@mui/icons-material/PinDrop';
export default function About(){
    return(
        <div className={style.wrapper}>
            <h1 className={style.heading}>Location <PinDropIcon className={style.icon}/></h1>
        <div className={style.location}> 
           <h1 >I am from Bahraich, UP</h1>
           <img className={style.img} src="https://cache.careers360.mobi/media/colleges/staticmap/2022/5/24/10501.png" alt='pic'/>
        </div>
        <div>
            <h1>
                Education
            </h1>
        </div>
        </div>
    )
}