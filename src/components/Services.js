import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa';


class Services extends Component {

state={
  services : [
    {
      icon:<FaCocktail/>,
      title: "Free Cocktails",
      info: "A cocktail is alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added. The origins of the cocktail are debated."
    },
    {
      icon:<FaHiking/>,
      title:"Endles Hiking",
      info:"Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Hiking is the preferred term in Canada and the United States; the term walking is used in these regions for shorter, particularly urban walks."
    },
    {
      icon:<FaShuttleVan/>,
      title:"Free Shuttle",
      info:"huttle bus - shuttle consisting of a bus that travels between two points. shuttle - public transport that consists of a bus or train or airplane that plies back and forth between two points."
    },
    {
      icon:<FaBeer/>,
      title:"Strongest Beer",
      info:"Beer is one of the oldest and most widely consumed alcoholic drinks in the world. It is also the third most popular drink overall after water and tea. Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize, and rice are also used"
    }
]
}

render(){
  return (

    <section className="services">
      <Title title="services"/>
      <div className="services-center">
        {this.state.services.map((item,index) => {return <article key={index} className="service">
          <span>{item.icon}</span>
          <h6>{item.title}</h6>
          <p>{item.info}</p>
        </article>})}
      </div>
    </section>
  );
}
}
export default Services;
