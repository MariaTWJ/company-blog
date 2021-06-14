
           /*to insert new html elem*/
for (var i = 1; i < localStorage.length; i++){
        
    
    var postval = JSON.parse(localStorage.getItem(localStorage.key(i)));

    var divId= "post"+i

    var terms = document.createElement("div");
    terms.setAttribute("id",divId);
    terms.setAttribute("class","card border border-5 col-6 offset-3");
    var element0 = document.getElementById("div1");
    element0.appendChild(terms);

    var para2 = document.createElement("h2");
    var node2 = document.createTextNode(postval[0]);
    para2.appendChild(node2);
    var element2 = document.getElementById(divId);
    element2.appendChild(para2);


    var para3 = document.createElement("p");
    var node3 = document.createTextNode(postval[2]);
    para3.appendChild(node3);
    var element3 = document.getElementById(divId);
    element3.appendChild(para3);
    

    var para = document.createElement("h4");
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
    let date = document.getElementById('date').value

    let post =[title,det,date]
    localStorage.setItem(title, JSON.stringify(post));
    


  }


            
