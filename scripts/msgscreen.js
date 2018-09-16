function sendfinished(){
    var jsparsed = JSON.parse(this.responseText)
    document.getElementById("messages").innerHTML+="<div class='wrapper3'><div></div><div></div><div class='card'>"+jsparsed.msg+"</div></div>"
}
function sendpushed(){
    return new Promise((resolve, reject) => {
        if (document.getElementById("messagefld").value!="") {
            resolve(document.getElementById("messagefld").value)
        }
        else{
            reject()
        }
    })
}
async function waittosend(){
    await sendpushed().then(function(message){
        var request = new XMLHttpRequest()
        request.open("POST", "/sendmsg", async=true)
        request.addEventListener("load", sendfinished)
        var f = document.getElementById("messagefield")
        var fd = new FormData(f)
        request.send(fd)
    })
}
function chat_action(name){
    document.getElementById("user").innerHTML=name;
    document.getElementById("toform").value=name;
    document.getElementsByClassName("chat_screen")[0].style.transition="0";
    document.getElementsByClassName("chat_screen")[0].style.right="0%";
    document.getElementsByClassName("chat_screen")[0].style.transition="all 0.3s cubic-bezier(.25,.8,.25,1)";
}
function back_chat_action(){
    document.getElementsByClassName("chat_screen")[0].style.right="-100%";
}