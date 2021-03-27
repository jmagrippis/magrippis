import remark from 'remark'
import html from 'remark-html'
import type Record from 'airtable/lib/record'
import type Table from 'airtable/lib/table'

import { styleLinks } from 'lib/remark/styleLinks'
import { airtableBase } from '../airtableBase'
import { Milestone, MilestonesInterface } from './types'

const mdProcessor = remark().use(styleLinks).use(html)

const mapRecordToMilestone = (record: Record): Milestone => ({
  title: record.get('title'),
  accomplishedAt: record.get('accomplishedAt'),
  description: mdProcessor.processSync(record.get('description')).toString(),
  github: record.get('github') || null,
  href: record.get('href') || null,
})

export class MilestonesAirtableRepo implements MilestonesInterface {
  #table: Table

  constructor(base = airtableBase) {
    this.#table = base('Milestones')
  }

  latest = () =>
    new Promise<Milestone[]>((resolve, reject) => {
      this.#table
        .select({
          view: 'Grid',
        })
        .firstPage(function (err, records) {
          if (err) return reject(err)

          return resolve(records.map(mapRecordToMilestone))
        })
    })
}

export const milestonesRepo = new MilestonesAirtableRepo()
