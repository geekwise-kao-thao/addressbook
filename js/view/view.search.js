//console.log('view.search.js EOF');

//works on fiddle 

//   var live_filter = (function(){
// 	var input_filter = document.querySelector("[data-filter]");
//   input_filter.addEventListener("keyup", function(){
//   	var input_value = this.value, i;
//     var filter_list = document.getElementById(this.dataset.filter);
//     var filter_item = filter_list.querySelectorAll("p");
//     return('p');
//     for (i = 0; i < filter_item.length; i++) {
//     		var _this = filter_item[i];
//         var phrase = _this.innerHTML + _this.id; 
//     	if (phrase.search(new RegExp('^'+input_value, "gi")) < 0) {
//       	_this.style.display = "none";
//       } else {
//       	_this.style.display = "block";
//       }
//     }
//   });
// })();

//keycode a=65, b=66, c==67, and so on for d -> z (z=90)

var search_regex = new RegExp('^'+get_element('search').value, "gi");

var search_value = get_element('search').value.match(search_regex); 

var contact_names = document.getElementsByClassName( 'inner_contact_container' );
var active_names = [];
var active_name_text = [];
var clear_array_values = function (array_name){
  
    return array_name.length = 0;
  
};



var search_filter = function(){
  
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    
  get_element('search').addEventListener('keyup',function(event){
    
    
    if(alphabet.indexOf(this.value) >= 0) {
      
      var active_name_container = get_element('abc_container_' + alphabet.indexOf(this.value));
       
      alphabet.forEach(function(letter){
          get_element('abc_container_' + alphabet.indexOf(letter) ).style.display = 'none';
          
          for(var i=0; i < contact_names.length; i++){
    
                    contact_names[i].setAttribute( 'data-search-status','inactive');
      
              };

      });
      
      active_name_container.style.display = 'inline-block';
        
      for(var i=0; i < active_name_container.childElementCount; i++){
            
            if(i !== 0){
              active_name_container.childNodes[i].setAttribute('data-search-status' ,'active');
              
            };

        };
        

    };

    //reset array values to clear for each keyup search
    clear_array_values( active_names );
    clear_array_values( active_name_text );         
    
    for(var i=0; i< contact_names.length; i++){
      
      
        if( contact_names[i].getAttribute('data-search-status') === 'active' ){
        
            console.log(contact_names[i]);
            active_names.push( contact_names[i] ); 
            
        };
      
    };
    
   
    
    if(this.value.length > 0){
        
        var search_value = '^' + this.value;
        var regex_pattern = new RegExp(search_value,'gi');

        
        console.log(this.value);

        for(var i=0; i< contact_names.length; i++){
              contact_names[i].style.backgroundColor = '#ffffff';
        }

        
        for(var i=0; i < active_names.length; i++){


            if( regex_pattern.test( active_names[i].textContent ) ){
                console.log( active_names[i] );
                active_names[i].style.backgroundColor = '#e2f4fa';
            }
                    
  
            
        };
        
        
        
        
        // console.log( active_names[0].textContent );
        // var search_match = active_names[0].textContent.match(regex_pattern);
        // console.log(search_match);
          
        // for(var i=0; i < active_names.length; i++){
            
        //     console.log( active_names[i].textContent );
        //     console.log(active_names[i].textContent.match(regex_pattern));
    
        // };
        
    }
    
  //end of search eventListener  
  });
  
//end of search_filter  
};



get_element('search').addEventListener('keyup',function(event){
  
  if(event.keyCode === 8){
    for(var i=0; i<26; i++){
      if(get_element('search').value.length === 0){
        get_element('abc_container_'+i).style.display = 'inline-block';
      };
    };
  };
});









