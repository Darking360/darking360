'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Miguel Bolivar'),
  handle: chalk.white('darking360'),
  work: chalk.white('Fullstack React and NodeJS Developer at ') + chalk.keyword('orange')('Sancrisoft ') + chalk.blue('⚛ ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('darking360'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~darking360'),
  github: chalk.gray('https://github.com/') + chalk.green('darking360'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('darking360'),
  web: chalk.cyan('https://bnb.im'),
  npx: chalk.red('npx') + ' ' + chalk.white('darking360'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + // newline
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.keyword('orange')(boxen(output, options)))
