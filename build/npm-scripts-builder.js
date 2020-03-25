const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = async function (project, config, args) {
  const { stdout, stderr } = await exec(`cd "${project.root}" && npm run build`)
}
