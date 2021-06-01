import { Highlights } from './Highlights/Highlights'
import { Signup } from './Signup/Signup'

const BelowTheFold = () => (
  <>
    <Highlights />
    <Signup
      prompt={
        <>
          <p>If you made it this far,</p>
          <p>
            you will <strong>love</strong> my weekly updates!
          </p>
        </>
      }
    />
  </>
)

export default BelowTheFold
