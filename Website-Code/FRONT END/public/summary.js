

    window.onload = function WindowLoad(event) {
        // console.log("data" + this.data);
        var n = 0;
        $.ajax({

            url:'/abc6',
            type: 'GET',
            success:function(res){
                console.log(res); 
                window.alert("lets");
                n = res.data; 
                console.log("No : " + n);  
                var text = "";
                for (let step = 0; step < n; step++) {
                  // text +="<p";
                  text += "\n\nSUMMARY : "+ (step+1).toString() + " : \n";
                  text +=res.arr_data[step];
                  text +="\n\n";
                  // text += "</p>";
                }
                // text += res.arr_data[0]
                document.getElementById('test').innerHTML = text;
                               
            }});
        
        
        
    }


    