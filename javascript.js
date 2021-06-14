
           /*to insert new html elem*/
for (var i = 1; i < localStorage.length; i++){
        
    
    var postval = JSON.parse(localStorage.getItem(localStorage.key(i)));

    var divId= "post"+i

    var terms = document.createElement("div");
    terms.setAttribute("id",divId);
    terms.setAttribute("class","card border border-5 col-6 offset-3");
    var element0 = document.getElementById("div1");
    element0.appendChild(terms);

    var para2 = document.createElement("h3");
    var node2 = document.createTextNode(postval[0]);
    para2.appendChild(node2);
    var element2 = document.getElementById(divId);
    element2.appendChild(para2);
    

    var para = document.createElement("h3");
    var node = document.createTextNode(postval[1]);
    para.appendChild(node);
    var element = document.getElementById(divId);
    element.appendChild(para);
 
    


 }   
              
              


              
       


        

            /*to change status in locstor to not notlogged*/
              document.getElementById("auth").addEventListener("click", displayDate);
              function displayDate() {
              
                localStorage.setItem("status","notlogged")
        }

        
            /*to change login*/
            if (localStorage.getItem("status")=="logged") {
                document.getElementById("auth").innerHTML = "Logout";
                document.getElementById("addPost").style.visibility="visible";
                  
              }

              else{
                document.getElementById("auth").innerHTML = "Login";

              }

            /*logo*/

            function imageClick() {
                location.replace("index.html")
            }


            /*posting*/
           
  function posting() {
    let title = document.getElementById('title').value
    let det = document.getElementById('det').value
    let post =[title,det]
    localStorage.setItem(title, JSON.stringify(post));
    


  }


            
