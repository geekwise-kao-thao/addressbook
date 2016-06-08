var contact_information = function(first_name,last_name,company,phone,email){
    this.first_name = first_name;
    this.last_name = last_name;
    this.company = company;
    this.phone = phone;
    this.email = email;
};

// lines 10-12 was to test regular expression for new string in array

// var regex_new_names = new RegExp('\\w{1,}\\b','gi');
// var regex_new_name_matches = new_contact_array[0].match(regex_new_names);
// console.log(regex_new_name_matches);
 
/**
 * Function to capitalize first letter of each word in a string from an array
*/
var capitalize_first_letter = function(word){
     var lower_to_upper = function(match){
         return match.toUpperCase();
     };
     //convert to self executing function lower_to_upper() at a later time;
     return word.replace(/\b\w/gi,lower_to_upper) // /\b\w/gi grabs the first letter of a word
};

/**
 * Function grabs the first string of words and calls capitalize_first_letter function
 * to capitalized first letter of each word.
*/
var replace_array_item = function(array_name,array_position,new_array_content){
    return array_name[array_position] = new_array_content;
};






            