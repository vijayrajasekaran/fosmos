'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const writeJson = require('write-json')
const shell = require('shelljs')
const log = console.log

class fosmos {
  constructor () {
    this.questions = [
      {
        type: 'input',
        name: 'name',
        message: 'App name',
        default: 'fosmos-app'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
        default: 'MVC'
      },
      {
        type: 'input',
        name: 'version',
        message: 'Version',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: 'Fosmos'
      },
      {
        type: 'input',
        name: 'license',
        message: 'License',
        default: 'UNLICENSED'
      },
      {
        type: 'list',
        name: 'private',
        message: 'Private',
        default: 'true',
        choices: ['true', 'false']
      },
      {
        type: 'list',
        name: 'packageManager',
        message: 'Preferred package manager',
        choices: ['npm', 'yarn']
      }
    ]
  }

  version () {
    const rawPackageData = fs.readFileSync(path.join(__dirname, '../package.json'))
    return `v${JSON.parse(rawPackageData).version}`
  }

  async createWizard () {
    log(`\nWelcome to ${chalk.blueBright('Fosmos.js CLI')} ${chalk.green(this.version())} new app wizard${chalk.green('!\n')}`)
    this.app = await inquirer.prompt(this.questions)
    this.createApp()
  }

  createApp () {
    fs.mkdirSync(this.app.name)
    const srcDir = path.join(__dirname, '../src/templates/fastify-react-mongodb-tailwindcss')
    const destDir = `./${this.app.name}`

    fs.copy(srcDir, destDir, err => {
      if (err) console.log(err)
    })

    const rawPackageData = fs.readFileSync(path.join(__dirname, '../src/templates/fastify-react-mongodb-tailwindcss/package.json'))
    const packageData = JSON.parse(rawPackageData)

    packageData.name = this.app.name
    packageData.version = this.app.version
    packageData.description = this.app.description
    packageData.author = this.app.author
    packageData.private = this.app.private
    packageData.license = this.app.license
    this.packageData = packageData

    log(`\nCreated new app: ${chalk.green(this.app.name)}`)
    log(`\nInstalling required packages using ${chalk.green(this.app.packageManager)}\n`)
    this.installPackages()
  }

  installPackages () {
    setTimeout(() => {
      writeJson.sync(`./${this.app.name}/package.json`, this.packageData)
      shell.cd(`./${this.app.name}`)
      shell.exec(`${this.app.packageManager} install`)
      log(`Success, Use ${chalk.green('fosmos dev')} inside the app directory to launch`)
      return true
    }, 5000)
  }

  launch () {
    log(`${chalk.blueBright('Fosmos.js CLI')} ${chalk.green(this.version())}`)
    return shell.exec('npm run lint -s & node ./index.js')
  }

  cmdError () {
    log(`${chalk.blueBright('Fosmos.js CLI')} ${chalk.green(this.version())}`)
    return log(chalk.red('Unable to recognize command!'))
  }
}

module.exports = fosmos
