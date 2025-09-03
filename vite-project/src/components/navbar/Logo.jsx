import { Link } from "react-router"
import { Button } from "../ui/button"

const Logo = () => {
  return (
    <Button size='sm' variant='outline' asChild>
      <Link to="/">
        <div>Logo</div>
      </Link>
    </Button>
  )
}
export default Logo;