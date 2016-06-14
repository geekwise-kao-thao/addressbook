// var contact_names = document.getElementsByClassName( 'inner_contact_container' );
// var active_names = [];

// var clear_array_values = function (array_name){
  
//     return array_name.length = 0;
  
// };

// var search_filter = function(){
//   get_element('search').addEventListener('keyup',function(event){
    
//     var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
//     /* Setting all containers with names to have a data-type attribute declaring it activive or inactive, see also line 31 */
//     for(var i=0; i < contact_names.length; i++){
//         contact_names[i].setAttribute( 'data-search-status','inactive');
//     };
    
//     /* e.g. if this.value is 'a' then it will match the array 'a', then indexOf will be '0' */
//     if(alphabet.indexOf(this.value) >= 0) {
      
//       /* Grabbing the particular container you desire based on what you enter in the search field */
//       var active_name_container = get_element('abc_container_' + alphabet.indexOf(this.value));
       
//       /**
//       * Go through each letter of the array and display it none except for the container which starts with the letter 
//       * that matches the search field value
//       */
//       alphabet.forEach(function(letter){
//           get_element('abc_container_' + alphabet.indexOf(letter) ).style.display = 'none';
//       });
      
//       /* Taking the desired container based on what was entered in the search field and display that one only*/
//       active_name_container.style.display = 'inline-block';
        
//       for(var i=0; i < active_name_container.childElementCount; i++){
//             if(i !== 0){
//               active_name_container.childNodes[i].setAttribute('data-search-status' ,'active');
              
//             };
//         };
//     };
  
//     clear_array_values(active_names);//?????????
    
//     var search_value = '^' + this.value;
//     var regex_pattern = new RegExp(search_value,'gi');
    
//     console.log(regex_pattern);
             
//     for(var i=0; i< contact_names.length; i++){
//         if( contact_names[i].getAttribute('data-search-status') === 'active' && 
//             regex_pattern.test( contact_names[i].textContent )
//         ){
//             console.log(contact_names[i]);
//             contact_names[i].style.backgroundColor = '#CAC9CE';
//         }else if(contact_names[i].getAttribute('data-search-status') === 'inactive'){
//             contact_names[i].style.backgroundColor = '#ffffff';
//         };
//     };      
//   });
// };// End of search filter function


var contact_names = document.getElementsByClassName( 'inner_contact_container' );
var active_names = [];
var active_name_text = [];
var clear_array_values = function (array_name){
  
    return array_name.length = 0;
  
};

var search_filter = function(){
  
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  get_element('search').addEventListener('keyup',function(event){
    
    /* e.g. if this.value is 'a' then it will match the array 'a', then indexOf will be '0' */
    if(alphabet.indexOf(this.value) >= 0) {
      
      /* Grabbing the particular container you desire based on what you enter in the search field */
      var active_name_container = get_element('abc_container_' + alphabet.indexOf(this.value));
      
      /**
      * Go through each letter of the array and display it none except for the container which starts with the letter 
      * that matches the search field value
      */ 
      alphabet.forEach(function(letter){
          get_element('abc_container_' + alphabet.indexOf(letter) ).style.display = 'none';
          
          /* Setting all containers with names to have a data-type attribute setting it's status to inactive */
          for(var i=0; i < contact_names.length; i++){
                contact_names[i].setAttribute( 'data-search-status','inactive');
          };
      });
      
      /* Taking the desired container based on what was entered in the search field and display that one only*/
      active_name_container.style.display = 'inline-block';
      
      /* For the container selected, set data-search-status to 'active', so can manipulate it */
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
        
        /* UI: When search entry matches names then change its background color*/
        for(var i=0; i < active_names.length; i++){

            if( regex_pattern.test( active_names[i].textContent ) ){
                console.log( active_names[i] );
                active_names[i].style.backgroundColor = '#e2f4fa';
            }
        };
    };
    
    /* Reset background color when search field is blank */
    if(this.value.length === 0){
      for(var i=0; i < active_names.length; i++){
              active_names[i].style.backgroundColor = '#ffffff';
          }
      };
  //end of search eventListener  
  });
  
//end of search_filter  
};

/**
 * Reset mode: when search field is clear, reset (display all contacts)
*/
get_element('search').addEventListener('keyup',function(event){
  
  if(event.keyCode === 8){
    for(var i=0; i<26; i++){
      if(get_element('search').value.length === 0){
        get_element('abc_container_'+i).style.display = 'inline-block';
      };
    };
  };
});









