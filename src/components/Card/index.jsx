import { Tag } from "../Tag"
import { Container } from "./styles"
import StarsRating from 'react-star-rate'
import { useState } from "react"


export function Card({ title, description, TitleTag }){
  const [rating, setRating] = useState(0);
return(
  <Container>
    <div>
    <a>{title}</a>
    <div>
    <StarsRating 
    value={rating}
    style={{ 
      style: { fontSize: 20 },
      full: { star: { color: "#FF859B"}}
      
     }}
    onChange= {rating => {
      setRating(rating)
    }} />
    </div>
    </div>
  <p>{description}</p>
  <Tag title={TitleTag}/>
  </Container>
  )
}