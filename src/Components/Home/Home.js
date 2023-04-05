import Navbar from "../Navbar/Navbar";
import style from './Home.module.css'
// import myPic from '../my pic.jpg'
import myPic from '../Removal-601.png'
export default function Home(){
    return(
   <div>
    <Navbar/>
    <div className={style.home}>
        <div className={style.left}>
           <h1>
           Welcome to my portfolio
           </h1>
           <h3>
           I'm a web developer
           </h3>

        </div>
        <div className={style.right}>
            <div className={style.circle}>
                  <img className={style.pic} src={myPic} alt="pic"/>
            </div>
        </div>
    </div>
   </div>
    )
}