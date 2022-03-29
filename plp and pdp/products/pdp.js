$(document).ready(function(){
    


         var text="";
         var name=new URL(location.href).searchParams.get("name");
           if(name!=null){
            var sku=new URL(location.href).searchParams.get("sku");
            var price=new URL(location.href).searchParams.get("price");
            var img=new URL(location.href).searchParams.get("img");
            text += "<h2> "+name+"</h2>";
            text += "<img  src='../images/"+img+"' width=300px height=300px />";
            text += "<h2>sku id:"+sku+"</h2>";
            text += "<h2> $"+price+"</h2>";
            document.getElementById('demo').innerHTML = text;
          
           }
         else{
             window.location.href="plp.html";
         }
           console.log(name);
         
         
         
});