import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaFootballBall, FaFutbol, FaTableTennis, FaVolleyballBall, FaBasketballBall ,  } from "react-icons/fa";
import "../DashBoard.css";

const sport = [
  {
    path: "/football",
    imgpath:"https://img.freepik.com/free-vector/flat-design-soccer-player-silhouette_23-2149481312.jpg?w=740&t=st=1692530200~exp=1692530800~hmac=1cf034605d65e850bc988618bb1738c79646065308d3283ed10b21308eb6a564",
    name: "Football",
    icon: <FaFutbol />,
  },
  {
    path: "/rugby",
    imgpath:"https://img.freepik.com/premium-vector/football-player-isolated-white_94396-54.jpg?w=740",
    name: "Rugby",
    icon: <FaFootballBall />,
  },
  {
    path: "/ttenis",
    imgpath:"https://img.freepik.com/free-vector/table-tennis-concept-illustration_114360-3550.jpg?w=740&t=st=1692530017~exp=1692530617~hmac=fc4e5cf28583ece5735b33d0afc351a6241a97b8edc3b8fd3f91922c4eea2333",
    name: "Table Tennis",
    icon: <FaTableTennis />,
  },
  {
    path: "/volleyball",
    imgpath:"https://img.freepik.com/premium-vector/volleyball-sport-athlete-player_112255-230.jpg?w=740",
    name: "VolleyBall",
    icon: <FaVolleyballBall />,
  },
  {
    path: "/basketball",
    imgpath:"https://img.freepik.com/free-vector/school-sports-team-abstract-concept-illustration-school-children-club-competitive-team-sports-kids-after-school-activity-local-tournament-athletic-exercise_335657-3498.jpg?w=740&t=st=1692529938~exp=1692530538~hmac=1260a79e33f9d05f09a427069a67124787d6e74a345a8e07cd09b505423d7fb3",
    name: "BasketBall",
    icon: <FaBasketballBall />,
  },
  {
    path: "/cricket",
    imgpath:"https://img.freepik.com/free-vector/ipl-cricket-illustration-hand-drawn-style_23-2149201607.jpg?w=740&t=st=1692529893~exp=1692530493~hmac=98a45d963d74906ec7a4f7fb3284a294d8d5d91384874f99338ce7adc2e2f2dd",
    name: "Cricket",
    icon: <FaBasketballBall />,
  },
];


const Dashboard = () => {
  return <>
    <div className="sport" >

      {sport.map((sport, index) => {

        return (
<>
<div className="fire">

            <Card key={index} >
            <Link to={sport.path}> <Card.Img variant="top" src={sport.imgpath} /> </Link>
              <Card.Body>
                <Card.Title>{sport.name}</Card.Title>
                <div style={{alignContent:'center',alignItems:'center'}}>

                <Link to={sport.path}>
                  <Button variant="primary" >{sport.icon}</Button>
                </Link>
                </div>
              </Card.Body>
            </Card>
</div>
        </>
        )
      })
      }

    </div>
        

  </>;
};

export default Dashboard;
