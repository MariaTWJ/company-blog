
              
              
              /*to change login*/
              if (localStorage.getItem("status")=="logged") {
                document.getElementById("auth").innerHTML = "Logout";
                document.getElementById("addPost").style.visibility="visible";
                  
              }

              else{
                document.getElementById("auth").innerHTML = "Login";

              }

            /*to change status in locstor to not notlogged*/
              document.getElementById("auth").addEventListener("click", displayDate);
              function displayDate() {
              
                localStorage.setItem("status","notlogged")
        }
            /*to auth the admin*/
              var form = document.getElementById("myForm");
              function handleForm(event) { event.preventDefault(); } 
              form.addEventListener('submit', handleForm);


              function auth() {

              
               var uname = document.getElementById('uname').value
               var pass = document.getElementById('pass').value

               if (uname=="admin" && pass=="admin") {
                
                 localStorage.setItem("status","logged")
                 location.replace("index.html")

               } 
               else {
                 document.getElementById("auth").innerHTML = "ops";
               }
            
            }
            /*logo*/

            function imageClick(u) {
                location.replace("index.html")
            }
            
