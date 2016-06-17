


/*  =================================================================

Notes: 

(find position Y)

var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

alert('Element is ' + offset + ' vertical pixels from <body>');


=========================================================================  */


var sticky_header = function(){
    for(var i=0; i<26; i++){
        var current_header = get_element( 'letter_container_'+i );
        var next_header = get_element( 'letter_container_' + ( i+1 ) );
        var current_header_parent = get_element( 'abc_container_' + i );
        
        get_element('names_container').addEventListener('scroll',function(event){
            
            
                current_header.classList.add('sticky');
            
            
            // document.getElementById("MyElement").classList.add('class');
    
            // document.getElementById("MyElement").classList.remove('class');
            
            // if ( document.getElementById("MyElement").classList.contains('class') )
            
            // document.getElementById("MyElement").classList.toggle('class');
            
            // var a = get_element('letter_container_0');
            // var b = get_element('letter_container_1');
            // var c = get_element('letter_container_2');
            // var d = get_element('letter_container_3');
            
            // a.style.position = 'fixed';
            // a.style.top = '181px';
            // a.style.width = '59.1%';
            
            // get_element('abc_container_0').style.marginTop = '55px';
            current_header.parentElement.classList.add('parent_margin_top');
            
            // console.log( 
            //     a.parentElement
            //     .nextSibling
            //     .firstChild
            //     .getBoundingClientRect()
            // );
            
            //var current_header_top_position = current_header.getBoundingClientRect().top;
            var next_header_top_position = next_header.getBoundingClientRect().top;
            
            // var b_top_position = b.getBoundingClientRect().top;// Distance from top of header to the top of document
            // var c_top_position = c.getBoundingClientRect().top;
            // var d_top_position = d.getBoundingClientRect().top;
            
            // if b=i then c=i+1
            
            //var current_header_bottom_position = current_header_top_position + current_header.offsetHeight;
            
            if(next_header_top_position <= 237){
                current_header.parentElement.classList.add('parent_relative');
                current_header.classList.remove('sticky');
                current_header.classList.add('non_sticky');
            };
            
            if(next_header_top_position <= 181){
                next_header.classList.add('sticky');
                current_header.parentElement.classList.add('parent_relative');
            };
            
            // if(b_top_position <= 237){// 237 =  the number of pixels adding top of previous header plus its height
            //     a.parentElement.style.position = 'relative';
            //     a.style.position = 'absolute';
            //     a.style.top = '40px';
            //     a.style.width = '100%';
            // };
            
            // if(b_top_position <= 181){// 181 = the number of pixels from the top of header to the top of document
            //     b.style.position = 'fixed';
            //     b.style.top = '181px';
            //     b.style.width = '59.1%';
            //     get_element('abc_container_1').style.marginTop = '55px';
            // };
            
            // if(c_top_position <= 237){
            //     b.parentElement.style.position = 'relative';
            //     b.style.position = 'absolute';
            //     b.style.top = '40px';
            //     b.style.width = '100%';
            // };
            
            // if(c_top_position <= 181){
            //     c.style.position = 'fixed';
            //     c.style.top = '181px';
            //     c.style.width = '59.1%';
            //     get_element('abc_container_2').style.marginTop = '55px';
            // };
            
            // if(d_top_position <= 237){
            //     c.parentElement.style.position = 'relative';
            //     c.style.position = 'absolute';
            //     c.style.top = '40px';
            //     c.style.width = '100%';
            // };
            
            // if(d_top_position <= 181){
            //     d.style.position = 'fixed';
            //     d.style.top = '181px';
            //     d.style.width = '59.1%';
            //     get_element('abc_container_3').style.marginTop = '55px';
            // };
            
        });
    
    };
};

sticky_header();















