import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, setBotArmy, botArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        { bots && bots.map((bot)=>{
          return <BotCard key = {bot.id} id = {bot.id} bot = {bot} setBotArmy = {setBotArmy} botArmy = {botArmy} />
        })}
      </div>
    </div>
  );
}

export default BotCollection;
