import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

const getUnique = (item, value) => {
  return [...new Set(item.map(item => item[value]))]
}

function RoomsFilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange,type,capacity,price,minSize,minPrice,maxSize,maxPrice,breakfast,pets
  } = context;
  let types = getUnique(rooms, 'type');
  types = ['all',...types]
  types = types.map((item, index)=>{return <option value = {item} key = {index}>{item}</option>})
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {return <option key={index} value={item}>{item}</option>})
  return(
  <section className="filter-container">
    <Title title="search rooms"/>
    <form className="filter-form">
      {/*select type*/}
      <div className="form-group">
        <label htmlFor="type">room type</label>
        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
          {types}
        </select>
      </div>
      {/*end select type*/}
      {/*guests*/}

        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
            {people}
          </select>
        </div>
      {/*end of guestes*/}
      {/*room price*/}
      <div className="form-group">
        <label htmlFor="price">room price ${price}</label>
        <input type="range" name ="price" min = {minPrice} max ={ maxPrice} id=" price" value={price} className="form-control" onChange={handleChange}  />
      </div>
      {/*end of room price*/}
    </form>
  </section>
)
}


export default RoomsFilter;
