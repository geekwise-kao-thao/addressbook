var first_name_field = get_element('right_input_0');
var last_name_field = get_element('right_input_1');
var company_name_field = get_element('right_input_2');
var done_button = get_element('done_button');

var update_contact = function(){
    done_button.addEventListener('click',function(event){
        
        create_contact_card();
        
        var first_name = first_name_field.value.length;
        var last_name = last_name_field.value.length;
        var company_name = company_name_field.value.length;
        
        if(first_name === 0 && last_name === 0 && company_name === 0){
            alert('Please enter names in all fields then click DONE.');
        }else{
            
            for(i in split_alphabet){
                var current_letter = split_alphabet[i];
                var current_abc_container = document.getElementById('abc_container_'+i);
                
                current_letter = current_letter.toLowerCase();
                var regex_pattern = new RegExp('^' + current_letter + '.*|\w','gi');
                    
                if(first_name_field.value.match(regex_pattern)){
                    var new_contact_container = document.createElement('p');
                    new_contact_container.setAttribute('class','inner_contact_container');
                    new_contact_array.push(first_name_field.value + ' ' + last_name_field.value);
                    current_abc_container.appendChild(new_contact_container);
                    
                    get_element('contact_card').style.display = 'inline-block';
                    
                }else{
                    
                };
            };
            
            if(get_element('phone_input_0').value.length >= 0){
                new_contact_home_phone_number.push(get_element('phone_input_0').value);
                get_element('phone_number').textContent = get_element('phone_input_0').value;
                get_element('phone_input_0').value = null;
            }
            
            /**
             * for-loop: replace_array_item function calls for capitalize_first_letter function from controller.js to replace
             * first letter of each word in string from an array, in this case it's the new_contact_array.
            */
            
            for(var i=0; i < new_contact_array.length; i++){
                replace_array_item(
                    new_contact_array,i,capitalize_first_letter( new_contact_array[i])
                );
            };
            
            /**
             * After names in new_contact_array are capitalized, make them as text content displaying on the All Contact screen
             * and on the Contact Card screen
            */
            
            for(var i=0; i<new_contact_array.length; i++){
                new_contact_container.textContent = new_contact_array[new_contact_array.length-1];
                console.log(new_contact_array[new_contact_array.length-1]);
                get_element('name_container').textContent = new_contact_array[new_contact_array.length-1];
            };
            
            console.log(new_contact_array); // leave it for demo purposes, delete after
            
            // display empty field after done is clicked
            first_name_field.value = null;
            last_name_field.value = null;
            company_name_field.value = null;
            
            /**
             * UI: displays All Contact screen
            */
            get_element('contact_container').style.display = 'inline-block';
            get_element('new_contact_container').style.display = 'none';
            
            /** 
             * UI: when plus is clicked, and New Contact screen is displayed, DONE button is greyed
             */
            if(get_element('new_contact_container').style.display === 'none'){
            done_button.style.color = '#BDBDBD'; //done button to turn grey again
            };
        };
    });
    
    // var remove_handler = function(){
    //     done_button.removeEventListener('click')
    // };
    
    // if(get_element('contact_card').style.display === 'inline-block'){
        
    // };
};


/**
 * UI: DONE button changes color when there is an any entry in the first, last, and company name fields,
 * and it changes back to lightgrey when the fields are empty.
 * 
 * Working for the first name field, but need to fix bug for last and company name fields.
*/

var click_on_first_name_field = function(){
    
    first_name_field.addEventListener('keydown',function(event){
        for(var i=0; i<500; i++){
            if(event.keyCode === i && event.keyCode != 8){
                done_button.style.color = '#0D7CE3'; // #0D7CE3 = iphone sky blue
            };
        };
    });
    
    first_name_field.addEventListener('keyup',function(event){
        if(first_name_field.value.length === 0 ){
            done_button.style.color = '#BDBDBD'; // #BDBDBD = lightgrey
        };
    });
};

// @Kao attempt new code for search field
var search_field = get_element('search');
//var header_letters = ('fixed_header');
var names = getElementsByClassName('inner_contact_container');


// search_field.addEventListener('keydown',function(event){
  
//   var regex_entry = new RegExp('^' + search_field.value + '.*|\w','gi');
  
    //for(var i=0; i<500; i++){
    // var search_affect = function(){
    //   if(search_field.value.length === 1){
    //     get_element('letter_container_0').style.width = '10px';
    //   };
    // };
    // search_affect();
    //};
// });

// not sure why this is not working???
search_field.addEventListener('click',function(event){
    
        get_element('letter_container_0').style.width = '10px';
    
});