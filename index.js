function newImage (src, position, left, right) {
    let newImage = document.createElement('img')
    newImage.src = src 
    newImage.style.position = position
    newImage.style.left = left
    newImage.style.bottom = right
    document.body.append(newImage)
}
// let newImage = document.createElement('img')
// newImage.src = src 
// newImage.style.position = 'fixed'
// newImage.style.left = '100px'
// newImage.style.bottom = '100px'
// document.body.append(newImage)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

newImage('assets/pine-tree.png','fixed', '300px', '300px') 