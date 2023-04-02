import React from "react";
import {Card, Button} from "react-bootstrap";
import Rating from "./Rating";

const SingelProduct = ({prod}) => {
 return (
  <div className="produts">
   <Card>
    <Card.Img className="productImage" variant="top" src={prod.image} alt="" />
    <Card.Body>
     <Card.Title>Rs. {prod.name}</Card.Title>
     <Card.Subtitle style={{paddingBottom: 10}}>
      <span>{prod.price.split(".")[0]}</span>
      {prod.fastDelivery ? (
       <div>Fast Delivery</div>
      ) : (
       <div> 4 day Delivery</div>
      )}
      <Rating rating={prod.rating} />
     </Card.Subtitle>

     <Button
      variant="danger"
      onClick={() =>
       dispatch({
        type: "REMOVE_FROM_CART",
        payload: prod,
       })
      }
     >
      Remove from Cart
     </Button>

     <Button
      onClick={() =>
       dispatch({
        type: "ADD_TO_CART",
        payload: prod,
       })
      }
      disabled={!prod.inStock}
     >
      {!prod.inStock ? "Out of Stock" : "Add to Cart"}
     </Button>
    </Card.Body>
   </Card>{" "}
  </div>
 );
};

export default SingelProduct;
