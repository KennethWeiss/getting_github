async function getCoderData() {
    // The await keyword lets js know that it needs to wait until it gets a response back to continue.
    var response = await fetch("https://api.github.com/users/KennethWeiss");
    // We then need to convert the data into JSON format.
    var coderData = await response.json();
    console.log(coderData)
    var div = document.createElement("div");
    div.innerHTML = (`${coderData.name} has ${coderData.followers} followers`);
    div2 = document.createElement("div")
    div2.innerHTML = (`<img src="${coderData.avatar_url}">`)
    document.querySelector(".body").appendChild(div);
    document.querySelector(".body").appendChild(div2);
    return coderData;
}

// console.log(getCoderData());
