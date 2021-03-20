import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addSityAsync,
  sity
} from './weatherSlice';
import styles from './Weather.module.css';
import {Card} from '../card/Card'

export function Weather() {
  const sityList = useSelector(sity)
   //http://openweathermap.org/img/wn/10d@2x.png
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addSityAsync('London'))
    dispatch(addSityAsync('London'))
    dispatch(addSityAsync('London'))
  }, [])

  return (
    <div>

    {sityList.map((sity) => 
   
      <Card sity={sity}/>)
  }
    
    </div>
  );
}
