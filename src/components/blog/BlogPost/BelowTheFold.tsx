import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Notice } from 'components/Notice/Notice'
import { ShareCTA } from 'components/ShareCTA/ShareCTA'
import { getShareUrl } from './getShareUrl'

type Props = {
  title: string
  tags: string[]
}

const BelowTheFold = ({ title, tags }: Props) => {
  const { asPath } = useRouter()
  const [shareUrl, setShareUrl] = useState(getShareUrl({ path: asPath }))

  const location = typeof window !== 'undefined' ? window.location : undefined

  useEffect(() => {
    if (location) {
      setShareUrl(getShareUrl({ location, path: asPath }))
    }
  }, [location, asPath])

  return (
    <div className="px-4">
      <ShareCTA title={title} tags={tags} url={shareUrl} />
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
}

export default BelowTheFold
