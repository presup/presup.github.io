function res_open_editor(id){
	//console.log(id);
	    jQuery(document).on('click', '.'+id+'-btn', function(){
		jQuery('.'+id+'-btn').toggle(function() {
			jQuery('.'+id+'-editor').trumbowyg({btns: [['bold', 'italic'], ['link'], 'btnGrp-justify','btnGrp-lists', ['viewHTML'] ,['fullscreen'] ]}).on('tbwchange', function(){ console.log('Focus!'); jQuery('.'+id+'-editor').trigger('change'); });
			jQuery('.'+id+'-editor').parent().fadeIn();
		},function(){
			jQuery('.'+id+'-editor').parent().fadeOut();
		}).trigger('click');    
    });
	
}

jQuery(document).ready(function(){

    jQuery('#widgets-left').after('<div class="res_editor_wrap" style="display:none;"><div id="the_editor"><div>Save</div><div>x</div></div></div>');
    jQuery('#the_editor').trumbowyg();

 });
