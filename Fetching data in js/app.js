
let userData = document.getElementById("userData");


async function callapi() {
    let responce = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await responce.json();
    userData.innerHTML = data.map((user)=>
        `<tr>
        <td>${user.userId}</td>
        <td>${user.id}</td>
        <td>${user.title}</td>
        <td>${user.completed}</td>
        </tr>`
    ).join("");
}
callapi();



