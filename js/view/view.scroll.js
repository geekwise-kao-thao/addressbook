/*  =================================================================

Notes: 

(find position Y)

var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

alert('Element is ' + offset + ' vertical pixels from <body>');


=========================================================================  */
// console.log( 
//     a.parentElement
//     .nextSibling
//     .firstChild
//     .getBoundingClientRect()
// );

// link: http://stackoverflow.com/questions/31223341/javascript-detecting-scroll-direction
// var lastScrollTop = 0;
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//   if (st > lastScrollTop){
//       // downscroll code
//   } else {
//       // upscroll code
//   }
//   lastScrollTop = st;
// }, false);
        
var sticky_header = function(){
    
    get_element('names_container').addEventListener('scroll',function(event){
        
        // var a = get_element('letter_container_0');
        // var b = get_element('letter_container_1');
        // var c = get_element('letter_container_2');
        // var d = get_element('letter_container_3');
        // var e = get_element('letter_container_4');
        
        // // Distance from top of header to the top of document
        // var a_top_position = a.getBoundingClientRect().top;
        // var b_top_position = b.getBoundingClientRect().top;
        // var c_top_position = c.getBoundingClientRect().top;
        // var d_top_position = d.getBoundingClientRect().top;
        // var e_top_position = e.getBoundingClientRect().top;
        
        /* ======================== A ================================ */
        
        // 181 = the number of pixels from the top of header to the top of document
        // 237 = the number of pixels from the top of the next header to the top of document
        
        for( var i = 0; i < 26; i++ ) {
            var current_header = get_element( 'letter_container_' + i );
            var next_current_header = get_element('letter_container_' + (i+1) );
            var current_header_top_position = current_header.getBoundingClientRect().top;
            
            if ( current_header_top_position <= 181 ){
                current_header.classList.add('fixed');
                current_header.parentElement.classList.add('parent_margin_top');
            } else {};
        
            if ( next_current_header.getBoundingClientRect().top <= 237 ) {
                current_header.parentElement.classList.add('parent_relative');
                current_header.classList.add('absolute');
            } else {};
            
            if ( next_current_header.getBoundingClientRect().top < 181 ) {
                current_header.classList.add('static');
                current_header.parentElement.classList.add('parent_margin_top_two');
            } else {};
        };
        
        
        
        // if (a_top_position <= 181) {
        //     a.classList.add('fixed');
        //     a.parentElement.classList.add('parent_margin_top');
        // } else {};
        
        // if (b_top_position <= 237) {
        //     a.parentElement.classList.add('parent_relative');
        //     a.classList.add('absolute');
        // } else {};
        
        // if (b_top_position <181) {
        //     a.classList.add('static');
        //     a.parentElement.classList.add('parent_margin_top_two');
        // } else {};
        
        
        
        // /* ======================== B ================================ */
        
        
        // if (b_top_position <= 181) {
        //     b.classList.add('fixed');
        //     b.parentElement.classList.add('parent_margin_top');
        // };
        
        // if (c_top_position <= 237) {
        //     b.parentElement.classList.add('parent_relative');
        //     b.classList.add('absolute');
        // };
        
        // if (c_top_position < 181) {
        //     b.classList.add('static');
        //     b.parentElement.classList.add('parent_margin_top_two');
        // };
        
        // /* ======================== C ================================ */
        
        // if (c_top_position <= 181) {
        //     c.classList.add('fixed');
        //     c.parentElement.classList.add('parent_margin_top');
        // };
        
        // if (d_top_position <= 237) {
        //     c.parentElement.classList.add('parent_relative');
        //     c.classList.add('absolute');
        // };
        
        // if (d_top_position <181) {
        //     c.classList.add('static');
        //     c.parentElement.classList.add('parent_margin_top_two');
        // };
        
        // /* ======================== D ================================ */
        
        // if (d_top_position <= 181) {
        //     d.classList.add('fixed');
        //     d.parentElement.classList.add('parent_margin_top');
        // };
        
        // if (e_top_position <= 237) {
        //     d.parentElement.classList.add('parent_relative');
        //     d.classList.add('absolute');
        // };
        
        // if (e_top_position <181) {
        //     d.classList.add('static');
        //     d.parentElement.classList.add('parent_margin_top_two');
        // };
        
    },false);
};

sticky_header();









