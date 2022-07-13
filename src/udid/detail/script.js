String.prototype.q2obj = function () {
    var qArr = this.split("&"),
        qObj = {},
        i = -1;
    while (++i < qArr.length) {
        qfrag = qArr[i].split("=");
        qObj[qfrag[0]] = qfrag[1];
    }
    return qObj;
};

var queryObj = location.search.substr(1).q2obj();
console.log(queryObj);

var objMatrix = Object.keys(queryObj).map((key) => [key, queryObj[key]]);
console.log(objMatrix);

window.addEventListener("load", () => {
    let list = document.getElementById("list");
    var index = 0;

    for (let obj of objMatrix) {
        let key = obj[0] == "" || obj[0] == null ? "?" : obj[0];
        let value = obj[1] == "" || obj[1] == null ? "Not available" : obj[1];
        let id = `row-${index}`;
        list.innerHTML += `
        <nav class="row">
            <a class="title">${key}</a>
            <a class="data">
                ${value}
            </a>
            <a class="icon" id=${index} onclick="doCopy(this)">
                <i class="far fa-clone"></i>
            </a>
        </nav>
        `;

        index += 1;
    }
});

function doCopy(element) {
    let index = element.id;
    let object = objMatrix[index];
    let key = object[0];
    let value = object[1];
    window.alert(`Value for ${key} has been copied.\nValue: ${value}`);
}
