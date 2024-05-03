import React from "react";
import BotCard from "./BotCard";
function YourBotArmy({ botArmy }) {
  //your bot army code here...
  // const[botss, setBotsArmy] = useState([])

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {botArmy && botArmy.map((bot)=>{
            return <BotCard key = {bot.id} bot = {bot}  />
          })}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
