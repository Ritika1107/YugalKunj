import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What We Offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bigkid.jpeg'
              text='Classes'
              label='Children & Adults!'
              path='/pictures'
            />
            <CardItem
              src='images/event.jpeg'
              text='Upcoming Events'
              label='Celebrate with Us!'
              path='/pictures'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/volunteet.jpeg'
              text='How to Volunteer'
              label='Be a part of the YK Family!'
              path='/pictures'
            />
            <CardItem
              src='images/baby.jpeg'
              text='Flowery Grove Montessori School'
              label='Register Now!'
              path='/rentals'
            />
            <CardItem
              src='images/teach.jpeg'
              text='Harmony Youth Center'
              label='Register Now!'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
