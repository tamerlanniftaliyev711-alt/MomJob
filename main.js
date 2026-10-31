const addToList = document.getElementById("btn");
const inp = document.getElementById("inp");
const lists = document.getElementById("lists")

const get = JSON.parse(localStorage.getItem("get")) || [];

function save() {
    localStorage.setItem("get", JSON.stringify(get));
};

function render(text) {
    const li = document.createElement('li')
    li.textContent = text
    const del = document.createElement('button')
    del.textContent = "Sil"
    del.addEventListener('click' , () => {
        li.remove();
        get.splice(get.indexOf(text) , 1)
        save();
    })
    lists.appendChild(li)
    li.appendChild(del)
}

get.forEach(render)

addToList.addEventListener('click', () => {
    const text = inp.value.trim();
    if (text === "") return;
    get.push(text)
    render(text);
    save();
});





