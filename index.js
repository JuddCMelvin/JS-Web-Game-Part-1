function newImage (src, position, left, right) {
    let newImage = document.createElement('img')
    newImage.src = src 
    newImage.style.position = position
    newImage.style.left = left
    newImage.style.bottom = right
    document.body.append(newImage)
}

newImage('assets/pine-tree.png','fixed', '450px', '200px') 
newImage('assets/tree.png','fixed', '200px', '300px') 
newImage('assets/pillar.png','fixed', '350px', '100px') 
newImage('assets/crate.png','fixed', '150px', '200px') 
newImage('assets/well.png ','fixed', '500px', '425px')
newImage('assets/green-character.gif','fixed', '100px', '100px')

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

function newItem () {
    let sword = document.createElement('img')
        sword.src = 'assets/sword.png'
        sword.style.position = 'fixed'
        sword.style.left = '500px'
        sword.style.bottom = '405px'
        document.body.append(sword)
        sword.addEventListener('click', function(){
        sword.remove()
    })
}

newItem()