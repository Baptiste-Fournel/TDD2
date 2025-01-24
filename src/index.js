let asyncFunc = async () => {
    let result = await fetch("https://google.fr?q=html");
    let data = await result.json();
    console.log(data);
}

let func = () => {
    fetch("https://google.fr?q=html")
    .then((result) => result.json())
    .then((data) => console.log(data))
}