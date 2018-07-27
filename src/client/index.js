fetch("/api/getUsername")
      .then(res => res.json())
      .then(response => 
        
        { document.getElementById('test').innerHTML=  response 
        
        });