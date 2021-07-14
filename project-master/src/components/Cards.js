import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC magic of Flavours!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {/* C:\Users\Asus\react-website-yt-1\src\images\nveg.jpg */}
            <CardItem
              src='images/nveg.jpg'
              text="Sharp your knife and hold on tight for Journey of Spices and Non-veg"
              label='NON-VEG'
              path='/blogs'
            />
            <CardItem
              src='images/veg.jpeg'
              text="Let's Please our mood by Making Home-Cooked Vegetarian Dish"
              label='VEG'
              path='/blogs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/desert.jpg'
              text="Add some Sweetness in your day, Let's try new Dessert today "
              label='DESSERTS'
              path='/blogs'
            />
            <CardItem
              src='images/drinks.jpg'
              text="Grab the Glass and Say Cheers with world-wide popular Drinks"
              label='DRINKS'
              path='/liked-recipes'
            />
            <CardItem
              src='images/salad.jpg'
              text='How about making your life more Fresh , What could be better than Salad for it'
              label='SALAD'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;