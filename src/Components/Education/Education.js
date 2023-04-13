import style from './Education.module.css'

export default function Education(){
      return(
        <div className={style.wrapper}>
            <div className={style.education}>
            <h1>
                Education
                
            </h1>
        </div>
        {/* <img src='https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif'/> */}
        <h3>FunctionUp</h3>
        <span>|</span>
        <h3>B.tech (Mechanical Engineering)   
        </h3>
         <p>Goel Institute of Technology and Management,Lucknow</p>
         <span>|</span>

        <h3>Intermediate</h3>
        <p>RPIC Suhelawa, Payagpur,Bahraich</p>
        <span>|</span>

        <h3>High School</h3>
        <p>Central Academy Indira Nagar ,Lucknow</p>
        
        </div>
      )
}