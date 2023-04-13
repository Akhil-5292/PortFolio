import Navbar from "../Navbar/Navbar";
import style from './Home.module.css'
// import myPic from '../my pic.jpg'
import myPic from '../Removal-601.png'
export default function Home(){
    return(
   <div className={style.wrapper}>
    <Navbar/>
    <div className={style.home}>
        <div className={style.left}>
           <h1>
           Welcome to my portfolio
           </h1>
           <h1>Hi! I am Akhil Singh</h1>
           <h1>
           I'm a web developer
           </h1>
           <img className={style.gif} src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif"/>
        </div>
        <div className={style.right}>
            <div className={style.circle}>
                  <img className={style.pic} src={myPic} alt="pic"/>
            </div>
            <button className={style.btn}>Download Cv</button>
        </div>
    </div>
   </div>
    )
}