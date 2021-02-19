import React from 'react';
import Card from './Card';

export default function CardsGallery() {
  return (
    <div className="gallery">
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src="https://images.unsplash.com/photo-1562945431-ce2b63d5a7fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="..."></img>
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content.">
      </Card>
    </div>

  )
}
