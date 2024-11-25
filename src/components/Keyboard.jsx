import "./keystyle.css"
import {index} from  './data.jsx'
import {index2} from  './data.jsx'
import {firstrow1} from  './data.jsx'
import {firstrow2} from  './data.jsx'
import {secondrow1} from  './data.jsx'
import {secondrow2} from  './data.jsx'
import {secondrow3} from  './data.jsx'
import {thirdrow1} from  './data.jsx'
import {thirdrow2} from  './data.jsx'
import {fourthrow1} from  './data.jsx'
import {fourthrow2} from  './data.jsx'
import {fifthrow1} from  './data.jsx'



const Keyboard=()=>{
    return(
<div id="keyboard" className="keyboard">


<div className="firstrow">
    {index.map(x=><button id={"key"+firstrow2[x]} className="button">  <small> <span>{firstrow1[x]}</span></small>       <span>{firstrow2[x]}</span></button>)}
    <button id="delete" className="delete">delete</button>
</div>

<div className="secondrow">
    <button className="tab">tab</button>
    {secondrow3.map((x)=>   <button  id={"key"+x}   className="button">    <span>{x}</span>  </button> )}
    {index2.map(i=><button id={"key"+secondrow2[i]} className="button">  <small> <span>{secondrow1[i]}</span></small>       <span>{secondrow2[i]}</span></button>)}
</div>



<div className="thirdrow">
    <button className="capslock">Caps Lock</button>
    {thirdrow1.map((x)=>   <button id={"key"+x}   className="button">    <span>{x}</span>  </button> )}
    <button id={"key:"}   className="button"> <small> <span> :</span> </small> <span>;</span></button>
    <button id={"key'"} className="button"> <small><span>"</span> </small>  <span>'</span> </button>
    <button className="enter">enter</button>
</div>


<div className="fourthrow">
    <button id="shift1" className="Shift">Shift</button>
    {fourthrow1.map((x)=>   <button id={"key"+x}  className="button">    <span>{x}</span>  </button> )}
    <button id={"key,"}   className="button">  <small> <span>{'<'}</span> </small>  <span>,</span></button>
    <button id={"key."}  className="button"> <small><span>{'>'}</span> </small><span>.</span></button>
    <button id={"key/"}  className="button"> <small><span>?</span> </small><span>{'/'}</span></button>
    <button  id="shift2" className="Shift">Shift</button>
</div>


<div className="fifthrow">
    <button className="ctrl"> Ctrl </button>
    <button className="win"> Win </button>
    <button className="alt"> Alt </button>
    <button id="space" className="spacebar"> Space bar </button>
    <button className="alt"> Alt</button>
    <button className="win"> Win </button>
    <button className="menu"> menu </button>
    <button className="ctrl"> Ctrl </button>
</div>





</div>
    )
}
export default Keyboard