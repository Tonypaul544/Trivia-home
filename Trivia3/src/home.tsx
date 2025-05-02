
import './home.css'
export default function Home() {
  
  return(
    <div className="playerontainer">
      <div className="selectPlayer">
        <button type='button' className="single">Single player</button>
        <button type='button' className="single">Multiplayer</button>
      </div>


      <div className="horizontal"></div>
      <div className="options">
        <button className="optionbtn2">How to play</button>
        <button className="optionbtn1" id='button'>Leaderboard</button>
        <button className="optionbtn3">Settings</button>
        <button className="optionbtn4">Exit Game</button>
      <div className="bg"></div>
      </div>
    </div>
  )
}