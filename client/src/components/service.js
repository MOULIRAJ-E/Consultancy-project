import React from 'react'
import "../css/services.css"
export const Service = () => {
    const card=[
        { img:'https://picsum.photos/id/54/400/300',
          title:'Explore Vasavi Mahal',
          desc:'Find the beuty of peace and places inside the mahal ',
          author:'Nancy Wheeler'
        },
        {
        img:'https://picsum.photos/id/54/400/300',
          title:'Pricing',
          desc:'Bill Details are mentioned clearly for the respective number of dates and type of events',
          author:'Nancy Wheeler',
        },
        {
        img:'https://picsum.photos/id/54/400/300',
          title:'Online Payment',
          desc:'online payment is enabled either through the card or UPI',
          author:'Nancy Whee' 
        }
    ]
    const a=card.map((x,index)=>{
        return <div key={index} className="card">
            <img src={x.img} />
          <div className="card-body">
            <h2>{x.title}</h2>
            <p>{x.desc}</p>
          </div>
        </div>
        })
  return (
    <div>

    <h1>SERVICES</h1>
    <div className="cards">
          {/* <img src={this.props.img} />
          <div className="card-body">
          <h2>{this.props.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <h5>{this.props.author}</h5>
        </div> */}
          {a}
          
    </div>
    </div>
  )
}
