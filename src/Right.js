import React from 'react';
import classes from './Right.module.css';
import ProductData from './ProductData';

const Right = (props) => {
    return(
        <div className={classes.Right}>
         <h1>{ProductData.title}</h1> 
          <p>{ProductData.description}</p>
          <h4>Select Color</h4>
          <div className={classes.Colors}>
            {ProductData.colorOptions.map((item,pos) => {
              return(
              <div key={pos} className={[classes.Card,pos === props.pos ?classes.active:null].join(" ")} onClick={() => props.watch(item,pos)}> 
                <img className={classes.Straps} src={item.imageUrl} alt="watch"/>
                </div>
              )
            })}
          </div>
          <h4>Features</h4>
         <div> 
          {ProductData.featureList.map((item,pos) =>{
            return(
                <button className={[classes.Buttons,pos === props.btn ? classes.Btn_Active:null].join(" ") } key={pos} onClick={() => props.toggle(item,pos)}>{item}</button>
            )
            })}
        </div>
        <button className={classes.Buy_Now}>Buy now</button> 
        </div>
    )
}

export default Right;