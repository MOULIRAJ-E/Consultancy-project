import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

// const cardsData = [
//   {
//     title: 'Card Title 1',
//     image: 'https://picsum.photos/200/150',
//     text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//     buttonLabel: 'Go somewhere',
//     buttonLink: '#'
//   },
//   {
//     title: 'Card Title 2',
//     image: 'https://picsum.photos/200/150',
//     text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//     buttonLabel: 'Go somewhere',
//     buttonLink: '#'
//   },
//   {
//     title: 'Card Title 3',
//     image: 'https://picsum.photos/200/150',
//     text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//     buttonLabel: 'Go somewhere',
//     buttonLink: '#'
//   },
//   {
//     title: 'Card Title 1',
//     image: 'https://picsum.photos/200/150',
//     text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//     buttonLabel: 'Go somewhere',
//     buttonLink: '#'
//   },
//   {
//     title: 'Card Title 2',
//     image: 'https://picsum.photos/200/150',
//     text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//     buttonLabel: 'Go somewhere',
//     buttonLink: '#'
//   },
//   {
//     title: 'Card Title 3',
//     image: 'https://picsum.photos/200/150',
//     text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//     buttonLabel: 'Go somewhere',
//     buttonLink: '#'
//   }
// ];



export const Cards = () => {
  const [list, setlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/add/gethotel")
        .then((response)=>{
          const data=response.data.data
          console.log(response)
          setlist(data)
          console.log("data received");
        })
        .catch((err)=>console.log(err))
    }, [])
    console.log("4");
    console.log(list);
  return (
    <div>
      <h1>Services</h1>
      <br></br>
    <Row xs={1} md={2} lg={3} className="g-4">
      {list.map((card, index) => (
        <Col key={index}>
          <Card className="h-100">
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.hotel_name }</Card.Title>
              <Card.Text>{card.location}</Card.Text>
              <Card.Text>Distance: {card.distance}</Card.Text>
              <Card.Text>Rating: {card.rating}</Card.Text>
              {/* <a href={card.buttonLink} className="btn btn-primary">{card.buttonLabel}</a> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};
