import fs from 'fs'
import build from '../src/buildTemplate'
import write from '../src/writeRouteFile'
import getConfig from '../src/getConfig'

const basePath = 'packages/aspida'

describe('cli test', () => {
  test('main', () => {
    const spyLog = jest.spyOn(fs, 'writeFileSync').mockImplementation(x => x)
    const { input, baseURL, trailingSlash } = getConfig(`${basePath}/aspida.config.js`)[0]
    const inputDir = `${basePath}/${input}`
    const inputs = [inputDir, `./${inputDir}`, `./${inputDir}/`, `${inputDir}/`]

    inputs.forEach(inputPath => {
      const resultFilePath = `${inputDir}/$api.ts`
      const result = fs.readFileSync(resultFilePath, 'utf8')
      write(build({ input: inputPath, baseURL, trailingSlash }))
      expect(fs.writeFileSync).toHaveBeenLastCalledWith(resultFilePath, result, 'utf8')
    })

    spyLog.mockReset()
    spyLog.mockRestore()
  })
})
