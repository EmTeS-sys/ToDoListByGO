function removeFromDb(item){
    fetch(`/delete?item=${item}`, {method: "Delete"}).then(res =>{
        if (res.status == 200){
            alert("Database deleted")
            window.location.pathname = "/"
        }
    })
 }
 
 function updateDb(item, status) {
    if (document.getElementById(status).value == "Completed"){
        alert("Status already completed !") 
        return
    } 
    let input = document.getElementById(item)
    let newitem = input.value
    fetch(`/update?olditem=${item}&newitem=${newitem}`, {method: "PUT"}).then(res =>{
        if (res.status == 200){
            alert("Database updated")
            window.location.pathname = "/"
        }
    })
 }