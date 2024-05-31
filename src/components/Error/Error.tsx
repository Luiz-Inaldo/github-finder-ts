import { ErrorMessage } from "../../types/error"
import ErrorSVG from '../../assets/questions.svg'

// css
import classes from './Error.module.css'


export const Error = ({message}: ErrorMessage) => {
  return (
    <div className={classes.error}>
        <img src={ErrorSVG} alt="error" title="Oops..." />
        <p>{message}</p>
    </div>
  )
}
