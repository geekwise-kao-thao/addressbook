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
var search_regex = new RegExp('^'+input_value, "gi");

var search_value = get_element('search').value.match(search_regex);
// var element_inner_html = function(){
//   for(var i=0; i<26; i++){
//     get_element('abc_container_'+i).children.innerHTML.match(search_regex);
//   };
// };

var search_filter = function(){
  
  get_element('search').addEventListener('keyup',function(event){
    
    
    
    if(event.keyCode === 65){
      for(var i=0; i<26; i++){
          get_element('abc_container_'+i).style.display = 'none';
          
          if(this.value === 'a'){
            get_element('abc_container_0').style.display = 'inline-block';
          };
      };
    };
    
    if(event.keyCode === 66){
      for(var i=0; i<26; i++){
          get_element('abc_container_'+i).style.display = 'none';
          
          if(this.value === 'b'){
            get_element('abc_container_1').style.display = 'inline-block';
          };
      };
    };
    
    if(event.keyCode === 67){
      for(var i=0; i<26; i++){
          get_element('abc_container_'+i).style.display = 'none';
          
          if(this.value === 'c'){
            get_element('abc_container_2').style.display = 'inline-block';
          };
      };
    };
  });
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









