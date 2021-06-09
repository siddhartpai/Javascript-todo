var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener('keyup', filterItems);


//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById("item").value;

    // Create new LI element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create a delete button
    var deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append Text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append delete button
    li.appendChild(deleteBtn)
    //append li to list
    itemList.appendChild(li)
    
    //console.log(li)
}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm("Are you sure")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // Get filter text and covert into lowercase
    var text = e.target.value.toLowerCase();
    // Grab all li
    var items = itemList.getElementsByTagName('li');
    // convert html collection to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    });
}