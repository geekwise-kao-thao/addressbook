var first_name_field = get_element('right_input_0');
var last_name_field = get_element('right_input_1');
var company_name_field = get_element('right_input_2');
var done_button = get_element('done_button');

var update_contact = function(){
    done_button.addEventListener('click',function(event){
        
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
                    new_contact_container.textContent = first_name_field.value + ' ' + last_name_field.value;
                    new_contact_array.push(new_contact_container.textContent);
                    current_abc_container.appendChild(new_contact_container);
                }else{
                    
                };
            };
            
            /**
             * for-loop: replace_array_item function calls for capitalize_first_letter function to replace
             * first letter of each word in string from an array, in this case it's the new_contact_array.
            */
            
            for(var i=0; i < new_contact_array.length; i++){
                replace_array_item(
                    new_contact_array,i,capitalize_first_letter( new_contact_array[i])
                );
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





