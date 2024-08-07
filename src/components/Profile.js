import "../styles/Profile.css"
import { forwardRef } from "react";

function Profile(props, ref) {

    return (<div ref={ref}>
        <p>Test</p>
    </div>)
}

export default forwardRef(Profile);