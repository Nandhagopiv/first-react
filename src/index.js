import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import img1 from "../src/Assets/Images/users (1).jpg"
import img2 from "../src/Assets/Images/users (2).jpg"
import img3 from "../src/Assets/Images/users (3).jpg"
import img4 from "../src/Assets/Images/users (4).jpg"
import img5 from "../src/Assets/Images/users (5).jpg"
import img6 from "../src/Assets/Images/users (6).jpg"
import Search from './Component/Search';
import Cards from './Component/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));


let users = [
  {
    name:"Jesika Koiel",
    msg:"Hey, Have you done with all things...",
    time:"11:52",
    pic: img6
  },
  {
    name:"Kyle Jamison",
    msg:"Hey, Im an Newzealand Cricketer called Blackcaps",
    time:"12:36",
    pic: img5
  },
  {
    name:"Ellyse Perry",
    msg:"Hey, Im an Australian Cricketer",
    time:"05:95",
    pic: img4
  },
  {
    name:"Dakota Johnson",
    msg:"Im a Wiffy of a Multi Billionaire",
    time:"04:47",
    pic: img1
  },
  {
    name:"Tony Stark",
    msg:"Hey, I'm Handsome, Billianaire, Genius... Iron man",
    time:"01:23",
    pic: img3
  },
  {
    name:"Steve Rogers",
    msg:"Hey,I'm Captain America...",
    time:"11:17",
    pic: img2
  }
]

root.render(
  <div>
    <Search></Search>
    {
      users.map(function(data){
        return <Cards name={data.name} msg={data.msg} time={data.time} pic={data.pic} ></Cards>
      })
    }
  </div>
)
