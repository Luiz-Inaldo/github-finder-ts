import { useNavigate } from "react-router-dom"

// css
import classes from './Button.module.css'

export const Button = () => {

    const navigate = useNavigate();

  return (
    // o navigate -1 faz com que seja voltada uma página antes
    <button className={classes.button} onClick={() => navigate(-1)}>Voltar</button>
  )
}
