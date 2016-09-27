fs.readdir(function (err, files) {
  if (err) {return console.error(err)
  } else {
    return  console.log(files);
  }
})
