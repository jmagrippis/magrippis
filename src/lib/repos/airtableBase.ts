import Airtable from 'airtable'

const BASE_ID = 'appsnwgcXdluNqBh3'

export const airtableBase = new Airtable().base(BASE_ID)
