import classes from './styles/card.module.css';
export const Card = (props) =>{
    return( 

            <div className={classes.flipCard}> 
                <div className={classes.flipCardInner} style = {props.style}>
                     <div className={classes.flipCardFront}> </div>
                </div>
               
            </div>
    )
}