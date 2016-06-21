var sticky_header = function(){
    
    get_element('names_container').addEventListener('scroll',function(event){
        
        for( var i = 0; i < 26; i++ ) {
            var current_header = get_element( 'letter_container_' + i );
            var next_current_header = get_element('letter_container_' + (i+1) );
            var current_header_top_position = current_header.getBoundingClientRect().top;
            
            // 181 = the number of pixels from the top of header to the top of document
            // 237 = the number of pixels from the top of the next header to the top of document
            
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
        
    },false);
};

sticky_header();









