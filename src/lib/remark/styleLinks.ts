import type { Plugin } from 'unified'
import visit from 'unist-util-visit'

export const styleLinks: Plugin = () =>
  function transform(tree) {
    visit(tree, 'link', (linkNode) => {
      linkNode.data = {
        hProperties: { className: 'underline text-purple-400' },
      }
    })
  }
