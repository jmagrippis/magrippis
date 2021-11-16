import type { Plugin } from 'unified'
import { Node, visit } from 'unist-util-visit'

const styleLinks: Plugin = () =>
  function transform(tree) {
    visit(tree, 'link', (linkNode: Node) => {
      linkNode.data = {
        hProperties: { className: 'underline text-purple-400' },
      }
    })
  }

export default styleLinks
