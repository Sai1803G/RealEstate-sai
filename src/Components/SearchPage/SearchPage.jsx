import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchPage.css'


const properties =[
    {
        id:1,
        image:'./r1.png',
        title:'Luxurious House',
        location:"Mumbai, Maharashtra",
        type:"House",
        price:"500000Rs"
    },
    {
        id:2,
        image:'./r2.png',
        title:'Modern Apartment',
        location:"Nagpur,Maharashtra",
        type:"Apartment",
        price:"900,000Rs"
    },
    {
        id:3,
        image:'./r3.png',
        title:'Office space',
        location:"Pune,Maharashtra",
        type:"Office",
        price:"600,000Rs"
    },
    {
        id:4,
        image:'./r1.png',
        title:'Office space',
        location:"Pune,Maharashtra",
        type:"Office",
        price:"400,000Rs"
    },
    {
        id:5,
        image:'./r2.png',
        title:'Elegant Penthouse in the City',
        location:"Pune,Maharashtra",
        type:"Penthouse",
        price:"560,000Rs"
    },
    {
        id:6,
        image:'./r3.png',
        title:'Office space',
        location:"Mumbai,Maharashra",
        type:"Office",
        price:"800,000Rs"
    },
    

]
const SearchPage = () => {
    const[location, setLocation] = useState('');
    const[propertyTitle, setPropertTitle] = useState('');
    const[filteredProperties, setFilteredProperties] = useState(properties);
    const navigate = useNavigate();


    const handleSearch =() =>{
        const filtered = properties.filter((property)=>{
            const matchesLocation = property.location.toLowerCase().includes(location.toLowerCase());
            const matchesType = property.title.toLowerCase().includes(propertyTitle.toLowerCase());
            return matchesLocation && matchesType;

        });
        setFilteredProperties(filtered);

    };

    return (
    <div className='search-page'>
        <div className='search-nav'>
        <h3 className="search-head">Search For Properties</h3>
        <button className='butt' onClick={()=>{navigate('/')}}>HOME</button>
        </div>
        {/* <Header></Header> */}
         <div className="search-filters">
            <input type='text'placeholder='Search by location' value={location} onChange={(e)=> setLocation(e.target.value)}/>
            
            <input type='text'placeholder='Search by Property' value={propertyTitle} onChange={(e)=> setPropertTitle(e.target.value)}/>
            
            <button onClick={handleSearch}>Search</button>
        </div>

       
      <div className='property-results'>
        {filteredProperties.length > 0 ? (
        <div className='property-results'>
          {filteredProperties.map((property) => (
            <div key={property.id} className='property-card'>
              <img src={property.image} alt={property.title} className='property-image' />
                <div className='property-details'>
                  <h3 className='property-title'>{property.title}</h3>
                  <p className='property-location'>{property.location}</p>
                   <p className='property-type'>{property.propertyType}</p>
                   <p className='property-price'>{property.price}</p>   

                </div>
            </div>
        ))}
       </div>
) : (
    <div className='Noprop'>
  <p >No Properties found</p>
  </div>
)}

    </div> 
    </div>
  );
};

export default SearchPage
