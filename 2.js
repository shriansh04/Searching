const namedata = document.querySelector("[name-template]")
const namecontainer = document.querySelector("[name-container]")
const searching = document.querySelector("[searching]")
const bulb = document.getElementsByClassName("im")
bulb[0].onclick = function() {
    document.body.classList.toggle("on");
    if(document.body.classList.contains("on")){
        bulb[0].src = "off.jpg";
    }
    else{
        bulb[0].src = "on.jpg";
    }
}
let users = []

searching.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const userName = user.name.toLowerCase();
        const isPresent = userName.includes(value);
        
        user.element.classList.toggle("hide", !isPresent);
    });
});

fetch('https://dummyjson.com/users?limit=0&select=firstName')
    .then(res => res.json())
    .then(data => {
        users = data.users.map(name => {
            const card = namedata.content.cloneNode(true).children[0]
            card.textContent = name.firstName
            namecontainer.append(card)
            return { name: name.firstName, element: card }
        })
    });
