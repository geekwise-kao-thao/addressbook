


/*  =================================================================

Notes: 

(find position Y)

var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;

alert('Element is ' + offset + ' vertical pixels from <body>');


=========================================================================  */


var sticky_header = function(){
    get_element('names_container').addEventListener('scroll',function(event){
        
        var a = get_element('letter_container_0');
        var b = get_element('letter_container_1');
        var c = get_element('letter_container_2');
        var d = get_element('letter_container_3');
        
        a.style.position = 'fixed';
        a.style.top = '181px';
        a.style.width = '59.1%';
        get_element('abc_container_0').style.marginTop = '55px';
        
        console.log( 
            a.parentElement
            .nextSibling
            .firstChild
            .getBoundingClientRect()
        );
        
        
        
        
        var b_top_position = b.getBoundingClientRect().top;
        var c_top_position = c.getBoundingClientRect().top;
        var d_top_position = d.getBoundingClientRect().top;
        
        //return top_position;
        
        if(b_top_position <= 235){
            a.style.position = 'absolute';
            a.style.top = '98px';
            a.style.width = '100%';
        };
        
        if(b_top_position <= 181){
            b.style.position = 'fixed';
            b.style.top = '181px';
            b.style.width = '59.1%';
            get_element('abc_container_1').style.marginTop = '55px';
        };
        
        if(c_top_position <= 235){
            b.parentElement.style.position = 'relative';
            b.style.position = 'absolute';
            b.style.top = '44px';
            b.style.width = '100%';
        };
        
        if(c_top_position <= 181){
            c.style.position = 'fixed';
            c.style.top = '181px';
            c.style.width = '59.1%';
            get_element('abc_container_2').style.marginTop = '55px';
        };
        
        if(d_top_position <= 235){
            c.parentElement.style.position = 'relative';
            c.style.position = 'absolute';
            c.style.top = '42px';
            c.style.width = '100%';
        };
        
        if(d_top_position <= 181){
            d.style.position = 'fixed';
            d.style.top = '181px';
            d.style.width = '59.1%';
            get_element('abc_container_3').style.marginTop = '55px';
        };
        
    });
};

sticky_header();















