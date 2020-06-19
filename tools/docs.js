#!/usr/bin/env node

const fs = require('fs')
const fsp = fs.promises
const scrape = require('website-scraper')
const rimraf = require('rimraf')
const scrapeDir = 'scrape'
const options = {
  urls: ['https://nodejs.org/api/'],
  filenameGenerator: 'bySiteStructure',
  recursive: true,
  maxRecursiveDepth: 1,
  directory: scrapeDir
}

const main = async () => {
  if (fs.existsSync(scrapeDir)) {
    rimraf(scrapeDir, {}, () => {})
  }
  await scrape(options)
  fsp.rename(`${scrapeDir}/nodejs.org/api`, 'docs-nodejs').then(() => {
    rimraf(scrapeDir, {}, () => {})
  })
}

main()
