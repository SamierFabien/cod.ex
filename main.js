function setResult(t) {
    document.getElementById("result").innerHTML = t;
}

function run() {
    let content = document.getElementById("code").innerHTML;
    content = content.replaceAll("&lt;", "<" ).replace("&gt;", ">");

    eval(content);
}