import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
   .then(resp => resp.json())
   .then(data => setBots(data))
  },[])

  return (
    <div>
      <YourBotArmy  botArmy = {botArmy}/>
      <BotCollection bots = {bots} setBotArmy = {setBotArmy} botArmy = {botArmy} />
    </div>
  )
}

export default BotsPage;
