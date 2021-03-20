import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {

} from './weatherSlice';
import styles from './Weather.module.css';
import {Card} from '../card/Card'
export function Weather() {
  return (
    <div>
    <Card/>
    </div>
  );
}
