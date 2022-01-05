import {useState} from 'react'
import styles from './Screen.module.css'
import boxLarge from '../images/box-large.png'
import boxSmall from '../images/box-small.png'
import boxVector from '../images/box-vector.png'
import Dropdown from '../Dropdown/Dropdown'
import BTC from '../images/btc.png'
import MATIC from '../images/matic.png'
import close from '../images/close.png'
import back from '../images/back.png'

function Screen() {

const [selected1,setSelected1]=useState({name:'BTC',img:BTC});
const [selected2,setSelected2]=useState({name:'BTC',img:BTC});
const [formData, setFormData] = useState({
    startTime:'',
    lotDuration:'',
    initialDeposit:''
    })



const { token1, token2,startTime ,lotDuration,initialDeposit} = formData    

const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

const submitHandler=()=>{
    console.log({token1:selected1.name,token2:selected2.name,...formData})
}

    return (
        <div className={styles.parentContainer}>
            <div className={styles.sideContainer}>
               <h1 className={styles.logoHeading}>RELATIVE</h1>
               <div className={styles.logoContainer}>
                   <img alt='logo' src={boxLarge} />
               </div>
            </div>
            <div className={styles.mainContainer}>
                
            {/* <Dropdown selected={selected} setSelected={setSelected}/> */}
                <div className={styles.buttonContainer}>
                  <div className={styles.buttonWrapper}><img src={back}/><button>Back</button></div>
                  <div className={styles.buttonWrapper}><button>Close</button><img src={close}/></div>
                 
                </div>
                <div className={styles.formContainer}>
                  <div className={styles.formHeading}>
                   <img alt='logo' src={boxSmall}/>
                   <span>Create Multi User Lot</span>
                  </div>
                

                <div className={styles.inputContainer1}>
                   <div className={styles.token}>
                   <span className={styles.inputLabel}>TOKEN 01</span>
                   {/* <select value={token1} id="token1" onChange={onChange}>
                   <option>BTC</option>
                   <option>MATIC</option>    
                   </select> */}
                    <Dropdown selected={selected1} setSelected={setSelected1}/>
                   </div>
                   <div className={styles.token}>
                   <span className={styles.inputLabel}>TOKEN 02</span>
                   {/* <select value={token2} id="token2" onChange={onChange}>
                   <option>BTC</option>
                   <option>MATIC</option>
                   </select> */}
                   <Dropdown selected={selected2} setSelected={setSelected2}/>
                   </div>
                </div>


                <div className={styles.inputContainer2}>
                 <div>
                   <span className={styles.inputLabel}>STARTS ON</span>
                   <input value={startTime} id="startTime" type='text' onChange={onChange} />
                 </div>

                 <div>
                  <span className={styles.inputLabel}>LOT DURATION</span>
                  <input  value={lotDuration} id="lotDuration" type='text' onChange={onChange} />
                 </div>
                </div>

                <div className={styles.inputContainer3}>
                  <div>
                  <span className={styles.inputLabel}>INITIAL DEPOSIT</span>
                  <input value={initialDeposit} id="initialDeposit" type='text' onChange={onChange} />
                  </div>
                </div>



                <div>
                <button onClick={submitHandler} className={styles.button}> <img alt='logo' src={boxVector}/> Create lot</button>
                </div>

                </div> 
                
                
            </div>
        </div>
    )
}

export default Screen
