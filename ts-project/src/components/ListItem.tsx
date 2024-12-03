import classes from './ListItem.module.css'
const ListItem : React.FC<{ text:string, onRemoveHandler: () => void }> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveHandler}>{props.text}</li>
  )
}

export default ListItem