import Link from 'next/link'
import { Notice } from 'components/Notice/Notice'
import { ShareCTA } from 'components/ShareCTA/ShareCTA'

type Props = {
  title: string
  tags: string[]
}

const BelowTheFold = ({ title, tags }: Props) => (
  <div className="px-4">
    <ShareCTA title={title} tags={tags} />
    <Link href="/blog" passHref>
      <Notice>
        Check out{' '}
        <span className="underline text-purple-600 bg-opacity-75">
          all posts
        </span>
      </Notice>
    </Link>
  </div>
)

export default BelowTheFold
