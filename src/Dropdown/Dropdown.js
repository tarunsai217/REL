import styles from './Dropdown.module.css'
import {useState} from 'react'
import BTC from '../images/btc.png'
import MATIC from '../images/matic.png'
import caretdown from '../images/chevronWhite.png'

function Dropdown({selected,setSelected}) {
    const [active,setActive]=useState(false);

    const options=[{name:'BTC',img:BTC},{name:'MATIC',img:MATIC}]
    return (
        <div className={styles.dropdown}>
            <div onClick={()=>{setActive(!active)}} className={styles.dropdownButton}>
            <div className={styles.selectContainer}><img src={selected.img} alt='coinlogo'/><span>{selected.name}</span></div>
            <img className={styles.caretDown} src={caretdown}/>
            </div>    
        {active && <div className={styles.optionsContainer}>
            {options.map(item=>{
                return (<div onClick={()=>{setActive(false);setSelected(item)}} key={item.name}  className={styles.optionContainer}><img src={item.img} alt='coinlogo'/><span>{item.name}</span></div>)
            })}
        </div>}
        </div>
    )
}

export default Dropdown
