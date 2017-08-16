import React from 'react';
import {Link} from 'react-router-dom';
import MainCategory from './category_index.jsx';

const Category = ({}) => {

  return (
    <div className="categoryBanner">
      <div className="categories">
        <div className="mainCategory">
          <ul>
            <Link className="category-link" to={'/categories/tech'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_tech.jpg`}/>
              Tech
            </Link>
            <Link className="category-link" to={'/categories/adventure'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_adventure.jpg`}/>
              Adventure
            </Link>
            <Link className="category-link" to={'/categories/music'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_music.jpg`}/>
              Music
            </Link>
            <Link className="category-link" to={'/categories/family'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_family.jpg`}/>
              Family
            </Link>
            <Link className="category-link" to={'/categories/art'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_art.jpg`}/>
              Art
            </Link>
            <Link className="category-link" to={'/categories/business'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_business.jpg`}/>
              Business
            </Link>
            <Link className="category-link" to={'/categories/sports'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_sports.jpg`}/>
              Sports
            </Link>
            <Link className="category-link" to={'/categories/beliefs'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_beliefs.jpg`}/>
              Beliefs
            </Link>
            <Link className="category-link" to={'/categories/food'}>
              <img className="category-img" src={`http://res.cloudinary.com/dvylj9hyw/image/upload/v1501274471/category/category_food.jpg`}/>
              Food
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
