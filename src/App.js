import { useState,useEffect } from "react";
import "./style.css"
import Keyboard from "./components/Keyboard";
function App() {
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  
  let paragraph= ['A plant is one of the most important living things that '+ 
        'develop on the earth and is made up of stems, leaves, '+
        'roots, and so on.Parts of Plants, The part of the plant '+
        'that developed beneath the soil is referred to as root '+ 
       ' and the part that grows outside of the soil is known as shoot. '+
        'The shoot consists of stems, branches, leaves, fruits, '+ 
        'and flowers.Plants are made up of six main parts: roots, stems, '+
        'leaves, flowers, fruits, and seeds.'
        ,
        'After graduating with a degree in graphic design, Emily landed a 3-month internship'+
        ' at a prestigious advertising agency. She quickly impressed her colleagues with her creativity'+
        ' and work ethic, often staying late to perfect her designs. By the end of the internship, Emily'+
        ' had not only gained valuable experience but also secured a full-time job offer, proving that'+
        ' internships can be a stepping stone to career success.'
        ,

        `Traveling to new places opens up a world of possibilities. Every corner of the globe offers something unique, whether it is breathtaking landscapes or fascinating cultures. Meeting people from different backgrounds teaches us more about the world than books ever could. The way they speak, dress, and interact can be so different, yet we all share the same human experiences. Sometimes, the most rewarding part of travel is stepping outside our comfort zone. It challenges us to grow. Each trip becomes a collection of memories we cherish forever.`

       ];
  const [mistakes,setMistakes]=useState(0);
  const [inpindex,setInpindex]=useState(0);
  const [inpvalue,setInpvalue]=useState('');
  const [userinput,setUserinput]=useState('');
  const [timeintervel,settimeinervel]=useState(0);
  const [activepointer,setActivePointer]=useState(inpindex);
  const [wpm,setWpm]=useState(0);
  const [randomindex,setRandomIndex]=useState(Math.floor(Math.random()*3));
  const [dummypara,setDummyPara]=useState(paragraph[randomindex])
  let timer;

  var i=-1;
  let j="a"

function size(){
  return inpindex;
}
 





  useEffect(() => {
    // Set an interval to decrease seconds every 1000ms (1 second)
    // if(inpindex!==paragraph.length){
      let len=inpindex
    // console.log(inpindex)
    const interval = setInterval(() => {
      // console.log(inpindex)
      settimeinervel((timeintervel) => (timeintervel > 0 ? timeintervel- 1 : 0)) 
    }, 1000);
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  
  }, []);




const handlewpm=()=>{
  let res=(inpindex-mistakes)/5
  res=res/1
  setWpm(Math.trunc(res)) 
}

  




const handlemousedown=()=>{
    document.getElementById('input').focus();
  
}

 



const tryagain=()=>{
  
  
  document.getElementById(inpindex).classList.remove('active');
  var i=0;
  document.getElementById('input').focus();
   for( i;i<dummypara.length;i++){

        let x=document.getElementById(i);
       
        if(x.classList.contains('wrong')){
          document.getElementById(i).classList.remove('wrong');
        }
        else if(x.classList.contains('right')){
          document.getElementById(i).classList.remove('right');
        }
        else{
          //document.getElementById(0).classList.add('active');
        
          break;
        }
   }
  //  console.log(inpindex);
   setMistakes(0);
   setInpindex(0);
   setInpvalue('');
   setUserinput('');
   settimeinervel(60);
   setWpm(0)
   let temp=Math.floor(Math.random()*3)
   console.log(temp);
   
   setRandomIndex(temp)
   setDummyPara(paragraph[temp])
   let firstindex=paragraph[temp][0]
  document.getElementById(0).classList.add('active'); 
  
  if(dummypara[inpindex]===' '){
    document.getElementById('space').style.backgroundColor="white"
  }
  else {
  document.getElementById("key"+dummypara[inpindex].toUpperCase()).style.backgroundColor="white"
 
  
  document.getElementById('shift1').style.backgroundColor="white"
  }
  
  document.getElementById("key"+firstindex).style.backgroundColor="lightgreen"
  document.getElementById('shift2').style.backgroundColor="lightgreen"
}



const handlechange=()=>{
 

  if(timeintervel!==0 && inpindex!==dummypara.length)
  {
    const z=document.getElementById("input")
   
    const y=document.getElementById("input").value;
    const inputvalue=y[y.length-1];


//This if for last index
    if(inpindex===dummypara.length-1){
       
          if(dummypara[inpindex]===inputvalue){
            document.getElementById(inpindex).classList.add('right');
          }
          else{
            document.getElementById(inpindex).classList.add('wrong');
          }
    }


//This if for every index except last index
   if(inpindex<dummypara.length-1){



    //This if to set keyboard button  colour when active
        if(inpindex ===0){  
           document.getElementById("key"+dummypara[0].toUpperCase()).style.backgroundColor="white"
           document.getElementById('shift1').style.backgroundColor="white"
        }



                  if((/[a-z]/).test(dummypara[inpindex]))
                    {
                      document.getElementById("key"+dummypara[inpindex].toUpperCase()).style.backgroundColor="white";
                    }
                else if((/[A-Z]/).test(dummypara[inpindex])){
                  
                          if((/[YUIOPHJKLBNM]/).test(dummypara[inpindex])){
                            document.getElementById("key"+dummypara[inpindex].toUpperCase()).style.backgroundColor="white";
                            document.getElementById('shift1').style.backgroundColor="white"
                            
                          }
                          else if((/[QWERTASDFGZXCV]/).test(dummypara[inpindex])){
                            document.getElementById("key"+dummypara[inpindex].toUpperCase()).style.backgroundColor="white";
                            document.getElementById('shift2').style.backgroundColor="white"
                          }
                }
             
                else if(dummypara[inpindex]===' '){
                    document.getElementById('space').style.backgroundColor="white";
                    }
                  else{
                    document.getElementById("key"+dummypara[inpindex]).style.backgroundColor="white";
                  }
                  
                    


                  if(dummypara[inpindex+1]===' '){
                    document.getElementById('space').style.backgroundColor="lightgreen";
                    
                  }
                  else if((/[a-z]/).test(dummypara[inpindex+1])){
                    document.getElementById("key"+dummypara[inpindex+1].toUpperCase()).style.backgroundColor="lightgreen";
                  }
                  else if((/[A-Z]/).test(dummypara[inpindex+1])){

                          if((/[YUIOPHJKLBNM]/).test(dummypara[inpindex+1])){
                                document.getElementById("key"+dummypara[inpindex+1].toUpperCase()).style.backgroundColor="lightgreen";
                                document.getElementById('shift1').style.backgroundColor="lightgreen"
                          }
                          else if((/[QWERTASDFGZXCV]/).test(dummypara[inpindex+1])){
                            document.getElementById("key"+dummypara[inpindex+1].toUpperCase()).style.backgroundColor="lightgreen";
                             document.getElementById('shift2').style.backgroundColor="lightgreen"
                          }
                  }
                 
                  else{
                    document.getElementById(`key`+dummypara[inpindex+1]).style.backgroundColor="lightgreen";

                  }
        

   
 

    if(dummypara[inpindex]===inputvalue){
       document.getElementById(inpindex).classList.add('right');
       document.getElementById(inpindex+1).classList.add('active');
       document.getElementById(inpindex).classList.remove('active');
       
     
    }
    else{
      setMistakes(mistakes+1);
      document.getElementById(inpindex).classList.add('wrong');
      document.getElementById(inpindex+1).classList.add('active');
      document.getElementById(inpindex).classList.remove('active');
    
    }
    
    // if(dummypara[inpindex]!==inputvalue){

    //   document.getElementById("key"+dummypara.length-1).style.backgroundColor='red'
    // }
    setInpindex(inpindex+1);
    setActivePointer(inpindex+1);
    // console.log(inpindex)
    handlewpm()
  }
} 
}


const handleStart=()=>{
  document.getElementById('startdiv').style.display='none';
  document.getElementById('keyboard').style.filter="blur(0px)";
  document.getElementById('container').style.filter="blur(0px)";
    tryagain();
}

   return (
  <>
   

   <div className="maindiv" onMouseUp={handlemousedown}>

    {/* <div id="heading" className="heading">
      <h1>Hey! Buddy Test Your Typing Skill</h1>
    </div> */}
    <div id="container" className="container">
      <input   onChange={handlechange}  id="input" type="text" placeholder="hello" autoFocus/>

      <br></br>
       <p className="paragraph"> {dummypara.split("").map(x=>(
          i+=1,
          <span  id={i}>{x}</span>
         ))}</p><br></br>
     <hr></hr>









   <div className="result">
         <ul>
          <li  className="time">
            <p>TimeLeft: </p>
            <span >{timeintervel}s</span>
          </li>
          <li className="mistakes">
              <p>Mistakes:</p>
              <span>{mistakes}</span>
          </li>
          <li className="wpm">
            <p>Wpm:</p>
            <span>{wpm}</span>

          </li>
          <li><button onClick={tryagain} className="tryagain">TryAgain</button></li>
         </ul>
      
   </div>




    </div>

   <div id="startdiv" className="startdiv" >
     <button className="startbutton" onClick={handleStart}>Start</button>
   </div>



    <div className="smallscreens">
     <p>Sorry! you have to practice in laptop or desktop </p>
    </div>
      <Keyboard/>
    </div>



    
    </>
  );
}

export default App;
