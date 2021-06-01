import { MutableRefObject, useEffect } from 'react'

const CONVERT_KIT_URI = 'https://jmagrippis.ck.page'
const useConvertKitScript = (
  containerRef: MutableRefObject<HTMLDivElement>,
  uid: string
) => {
  useEffect(() => {
    if (document.querySelector(`[data-uid*="${uid}"]`)) return

    const script = document.createElement('script')
    script.src = `${CONVERT_KIT_URI}/${uid}/index.js`
    script.async = true
    script.dataset.uid = uid

    containerRef.current.appendChild(script)

    return () => {
      document.querySelector(`[data-uid*="${uid}"]`)?.remove()
    }
  }, [containerRef, uid])
}

export default useConvertKitScript
