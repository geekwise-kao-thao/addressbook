/**
 * pre-populated names on the All Contact screen comes from this data.
*/

var alonzo = new contact_information('Alonzo','Yrigollen','EDC','(559) 111-1111','geekwise.alonzo.yrigollen@gmail.com');
var j = new contact_information('J','Tablett','EDC','(559) 111-1112','geekwise.jennifer.tablett@gmail.com');
var tiffany = new contact_information('Tiffany','Ranish','EDC','(559) 111-1113','geekwise.tiffany.ranish@gmail.com');
var nicole = new contact_information('Nicole','Deltoro','EDC','(559) 111-1114','geekwise.nicole.deltoro@gmail.com');
var veronica = new contact_information('Veronica','Chavez','EDC','(559) 111-1115','geekwise.veronica.chavez@gmail.com');
var juston = new contact_information('Juston','Miller','EDC','(559) 111-1116','geekwise.juston.miller@gmail.com'); 
var mark = new contact_information('Mark','Thomas','EDC','(559) 111-1116','mark.thomas.miller@gmail.com'); 
var bob = new contact_information('Bob','Brettson','EDC','(559) 111-1116','mark.thomas.miller@gmail.com'); 
var sarah = new contact_information('Sarah','Smith','EDC','(559) 111-1116','mark.thomas.miller@gmail.com'); 
var carol = new contact_information('Carol','Acosta','EDC');
var donald = new contact_information('Donald');
var edgar = new contact_information('Edgar');
var fred = new contact_information('Fred');
var gary = new contact_information('Gary');
var hero = new contact_information('Hero');
var igloo = new contact_information('Igloo');
var kao = new contact_information('Kao');
var larry = new contact_information('Larry');
var octopus = new contact_information('Octopus');
var peter = new contact_information('Peter');
var query = new contact_information('Query');
var robert = new contact_information('Robert');
var uber = new contact_information('Uber');
var xray = new contact_information('Xray');
var zebra = new contact_information('Zebra');


var contact_array = [
    alonzo,
    juston,
    tiffany,
    nicole,
    veronica,
    j,
    mark,
    bob,
    sarah,
    carol,
    donald,
    edgar,
    fred,
    gary,
    hero,
    igloo,
    kao,
    larry,
    octopus,
    peter,
    query,
    robert,
    uber,
    xray,
    zebra
];

/**
 * array of content for containers populated on the New Contact screen
*/

var add_info_array = [
    'add phone',
    'add email',
    'Ringtone  Default',
    'Vibration  Default',
    'Text Tone  Default',
    'Vibration  Default',
    'add url',
    'add address',
    'add birthday',
    'add date',
    'add related name',
    'add social profile',
    'add instant message',
    '',
    'add field'
];

/**
 * array of content for containers after clicking on add phone
*/

var label_array = [
    'home',
    'work',
    'iphone',
    'mobile',
    'main',
    'home fax',
    'work fax',
    'pager',
    'other'
];

/**
 * empty array, but when the done button is clicked after new contact is entered,
 * first and last name will be pushed into this array as a string, stored in the browser
*/
var new_contact_array = [];

var contact_card_array = [];// Not sure if this array was used, may delete later

var new_contact_home_phone_number = [];// Phone number entered in this input will be displayed in individual contact card



