
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signin" />
      </div>
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  )
}
