import { PiSpinner } from "react-icons/pi"

//css
import classes from './Loader.module.css'

export const Loader = () => {
  return (
    <>
    <PiSpinner className={classes.loader}/>
    </>
  )
}
