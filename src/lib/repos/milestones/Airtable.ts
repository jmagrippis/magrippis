import { remark } from 'remark'
import html from 'remark-html'
import type { FieldSet, Record, Table } from 'airtable'

import styleLinks from 'lib/remark/styleLinks'
import { airtableBase } from '../airtableBase'
import { Milestone, MilestonesInterface } from './types'

const mdProcessor = remark().use(styleLinks).use(html)

interface MilestoneRecordFields extends FieldSet {
  title: string
  accomplishedAt: string
  description: string
  github: string
  href: string
}
type MilestoneRecord = Record<MilestoneRecordFields>

const mapRecordToMilestone = (record: MilestoneRecord): Milestone => ({
  title: record.get('title'),
  accomplishedAt: record.get('accomplishedAt'),
  description: mdProcessor.processSync(record.get('description')).toString(),
  github: record.get('github') || null,
  href: record.get('href') || null,
})

export class MilestonesAirtableRepo implements MilestonesInterface {
  #table: Table<MilestoneRecordFields>

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
