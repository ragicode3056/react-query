import { Card } from "./Card";
import classes from './styles/card.module.css';
export const Container = () =>{
    return (
        <div className={classes.cardContainer}>
            <Card style={{backgroundColor:"#CCE5FF"}}></Card>
            <Card style={{backgroundColor:"#CCFFE5"}}/>
            <Card style={{backgroundColor:"#33ffff"}}/>
        </div>
    )
}