//the source of truth
const STORE = {
  shoppingItems: [
    {
      title: 'get milk',
      completed: false,
    },
    {
      title: 'get bread',
      completed: false,
    },
    {
      title: 'get bananas',
      completed: true,
    }
  ]
}


function displayItems() {
  const listElement = $('.shopping-list')
  console.log('list element:', listElement)

  //clear the list
  listElement.empty()
  STORE.shoppingItems.forEach((itemObj, idx) => {
    const completedClassName = itemObj.completed ? 'completed' : ''
    const itemHTML = `<li class="${completedClassName}" data-index="${idx}">${itemObj.title}</li>`
    console.log(itemObj)
    listElement.append(itemHTML)
  })

}

//
function toggleCompleted(event) {
  const clickedIndex = $(event.target).attr('data-index')
  const item = STORE.shoppingItems[clickedIndex]

  // flip the completed property
  item.completed = !item.completed

  //data has changed, so re-display
  displayItems()
}

$(displayItems)
$(() => {
  $('.shopping-list').on('click', 'li', toggleCompleted)
})