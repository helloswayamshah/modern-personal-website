import { forwardRef } from "react"
import "../styles/ContactMe.css"

function Contact(props, ref) {

    return (<div ref={ref}></div>)
}

export default forwardRef(Contact);