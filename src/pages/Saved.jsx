import "../App.css";
import "../DashBoard.css";

const games = [
  {
  team1:"IIT BHU",
  team2:"IIT K",
  time:"5:00 pm",
  icon1:"",
  icon2:"",
  loc:"at RAJPUTANA",
},
{
team1:"IIT D",
team2:"IIT M",
time:"11:00 am",
icon1:"",
icon2:"",
loc:"at GYMKHANA",
},
  {
  team1:"IIT G",
  team2:"IIT B",
  time:"7:00 pm",
  icon1:"",
  icon2:"",
  loc:"at ADV",
},

]

const Saved = () => {
  return (
    <>
    <div className="iknow">
{/* <SideBar/> */}
    <div className="iknow2">
    <h1 style={{display:'flex',justifyContent:'center'}}>Cricket Matches</h1>
    {games.map((games,index) => {
      return (
        
  <div class="table-wrapper" key={index}>

  
	<ul class="data col horizontal">
	 <li class="content">
		 
		 <div class="secondary">{index+1}</div>
	 </li>
	 <li class="content has-image">
		 <div>{games.team1}</div>
		 <div class="secondary">{games.team1}</div>
	 </li>
  
	 <li class="content has-image">
		 <div>{games.team2}</div>
		 <div class="secondary">{games.team2}</div>
	 </li>
	 <li class="content">
		 <div>{games.time}</div>
		 <div class="secondary">{games.loc}</div>
	 </li>
	
	 <li class="content">

	 </li>
	</ul>
    </div>
      )
    })}
</div>
</div>
  </>
    )
};


export default Saved;
