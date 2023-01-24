import React,{ useEffect, useState } from "react";
import '../stylesheets/YourBotArmy.css';
import BotCard from "./BotCard";
import MyBotCard from "./MyBotCard";

const API = "https://api.npoint.io/8085765abb1a086a19d8"

function YourBotArmy({myBots,removeMyBot}){

    

    const botsList = myBots?.map((bot)=>{
        return(
            <MyBotCard
            key={`botsList`+bot.id}
            bot={bot}
            removeMyBot={removeMyBot}
            />
        )
    })

    return(
        <div id="my-list" className="container mt-4" >
            <h2>Bot Army</h2>
            <div className="scroll-images d-flex flex-row flex-nowrap row"
            // onWheel={(e)=>{
            //     // e.preventDefault();
            //     e.stopPropagation();
            //     console.log(e.target)
            //     e.target.scrollLeft += e.deltaY;
            // }}
            >
                {botsList}
            </div>
        </div>
    )
}

export default YourBotArmy