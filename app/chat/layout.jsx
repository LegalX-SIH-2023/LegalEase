import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const layout = ({children}) => {
  return (
    <div>
     {children}
    </div>
  )
}

export default layout
