import React from 'react';
import classes from './Left.module.css'

const Left = (props) => {
    var date = new Date();
    date = `${date.getHours()}:${date.getMinutes()}` ;
    return (
        <div className={classes.Left}>
          <img className={classes.WatchImg} src={props.src} alt="watch"/>
          {props.featureList === "Time" ? <div className={classes.Time}>{date}</div>:<div className={classes.Time}><h2 style={{color:'red',margin:0}}><i className="fa fa-heart-o" ></i></h2>74</div>}
        </div>
    )
}
export default Left;