const fs = require('fs')
const path = require('path')
const sharp = require('sharp')


function honorCompress (done) {
  let pathToHonor = './public/images/wallOfHonor'
  let honorYears = fs.readdirSync(pathToHonor)

  let logger = (err, info) => {
    if (err) {console.log(err)}
    if (info) {console.log(info)}
  }

  honorYears.forEach(item => {
    let albumPath = `${pathToHonor}/${item}`
    let photoColl = fs.readdirSync(albumPath)

    if (!fs.existsSync(`${albumPath}/min`)) {fs.mkdirSync(`${albumPath}/min`)}
    
    photoColl.forEach(item => {
      inputPath = `${albumPath}/${item}`
      outputPath =`${albumPath}/min/${item}`

      sharp(inputPath).resize(400).toFile(outputPath, logger)
    })
  })
  
  done()
}


function compressPapers (done) {
  let papersItems = fs.readdirSync('./public/papers')
  let inputPath = './public/papers'
  let outputPath = './public/papers/min'

  let logger = (err, info) => {
    if (err) {console.log(err)}
    if (info) {console.log(info)}
  }


  papersItems.forEach(item => {
    if (path.extname(item) == '.jpg') {
      sharp(`${inputPath}/${item}`).resize(400).toFile(`${outputPath}/${item}`, logger)
    }
  })

  done()
}


function renameImages (done) {
  let ext, folder, folderPath, 
  oldName, newName, logger,
  counter

  logger = (err, info) => {
    if (err) {console.log(err)}
    if (info) {console.log(info)}
  }

  ext = 'jpg'
  folderPath = './public/images/wallOfHonor/2022'
  folder = fs.readdirSync(folderPath)

  counter = 1
  for (let item of folder) {
    if (item == 'fullRes') continue
    oldName = `${folderPath}/${item}`
    newName = `${folderPath}/${counter}.${ext}`
    fs.rename(oldName, newName, logger)
    counter++
  }

  done()
}


function compressFolder (done) {
  let pathToHonor, targetFolder, logger,
  inputPath, outputPath

  pathToHonor = './public/images/wallOfHonor/2022'
  targetFolder = fs.readdirSync(pathToHonor)

  logger = (err, info) => {
    if (err) {console.log(err)}
    if (info) {console.log(info)}
  }

  if (!fs.existsSync(`${pathToHonor}/min`)) {
    fs.mkdirSync(`${pathToHonor}/min`)
  }

  for (let item of targetFolder) {
    if (item == 'min') {continue}
    inputPath = `${pathToHonor}/${item}`
    outputPath =`${pathToHonor}/min/${item}`

    console.log({inputPath, outputPath});
    sharp(inputPath).resize(400).toFile(outputPath, logger)
  }

 
  done()
}



function test (done) {
  console.log('Work without Gulp require!!!')
  done()
}

exports.honorCompress = honorCompress
exports.fCompress = compressFolder
exports.compressPapers = compressPapers
exports.default = test
exports.rename = renameImages