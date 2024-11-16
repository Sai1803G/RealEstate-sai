import React from 'react'
import './FeaturedProperties.css'
import { useNavigate } from 'react-router-dom'

const Properties =[

    {
        id:1,
        image:"./r1.png",
        title:"Luxurious House",
        location:"Mumbai,Maharashtra",
        price:"400000Rs",
    },
    {
        id:2,
        image:"./r2.png",
        title:"Modern Apartment",
        location:"Banglore,Karnataka",
        price:"400000Rs",
    },
    {
        id:3,
        image:"./r3.png",
        title:"Office space",
        location:"Pune,Maharashtra",
        price:"400000Rs",
    },
   {
    id:4,
    image:"./r1.png",
    title:"Luxurious House",
    location:"Delhi,Delhi",
    price:"1,00,000/month",
},
{
    id:5,
    image:"./r2.png",
    title:"Modern Apartment",
    location:"Goa,Goa",
    price:"2,00,000/month",
},
{
    id:6,
    image:"./r3.png",
    title:"Office space",
    location:"Hyderabad,Telangana",
    price:"1,20,000/month",
},
    

]

const FeaturedProperties = () => {
    const navigate = useNavigate();
  return (
   <section className='featured-properties'>
    {/* <h2 className='section-title'>Featured Properties</h2> */}
    <div className='feat-nav'>
        <h3 className="feat-head">Featured Properties</h3>
        <button className='butt' onClick={()=>{navigate('/')}}>HOME</button>
    </div>
     <div className='properties-grid'>
        {Properties.map((property)=>(
            <div key ={property.id} className='property-card'>
               <img src={property.image} alt={property.title} className='property-image'></img>
               <div className="property-details">
                  <h3 className='property-title'>{property.title}</h3>
                  <p className='property-location'>{property.location}</p>
                  <p className='property-price'>{property.price}</p>
                 

               </div>
            </div>
        ))}
     </div>
   </section> 
    

  )
}

export default FeaturedProperties
