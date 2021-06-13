
              
              
              
              if (localStorage.getItem("status")=="logged") {
                document.getElementById("auth").innerHTML = "Logout";
                  
              }
              
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