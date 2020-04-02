function mediaPicker(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
					jQuery('.widgtimgprv, .mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="widgtimgprv" /><span style="float:right;cursor: pointer;" class="mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.widgtimgprv, .mediaremvbtn').remove();
        });
});






function expwid2img1(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.expwid2img1prv, .expwid2img1mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="expwid2img1prv" /><span style="float:right;cursor: pointer;" class="expwid2img1mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.expwid2img1mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.expwid2img1prv, .expwid2img1mediaremvbtn').remove();
        });
});






function expwid2img2(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.expwid2img2prv, .expwid2img2mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="expwid2img2prv" /><span style="float:right;cursor: pointer;" class="expwid2img2mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.expwid2img2mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.expwid2img2prv, .expwid2img2mediaremvbtn').remove();
        });
});





function expwid2img3(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.expwid2img3prv, .expwid2img3mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="expwid2img3prv" /><span style="float:right;cursor: pointer;" class="expwid2img3mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.expwid2img3mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.expwid2img3prv, .expwid2img3mediaremvbtn').remove();
        });
});





function expwid2img4(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.expwid2img4prv, .expwid2img4mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="expwid2img4prv" /><span style="float:right;cursor: pointer;" class="expwid2img4mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.expwid2img4mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.expwid2img4prv, .expwid2img4mediaremvbtn').remove();
        });
});






function expwid2img5(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.expwid2img5prv, .expwid2img5mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="expwid2img5prv" /><span style="float:right;cursor: pointer;" class="expwid2img5mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.expwid2img5mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.expwid2img5prv, .expwid2img5mediaremvbtn').remove();
        });
});





function expwid2img6(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.expwid2img6prv, .expwid2img6mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="expwid2img6prv" /><span style="float:right;cursor: pointer;" class="expwid2img6mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.expwid2img6mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.expwid2img6prv, .expwid2img6mediaremvbtn').remove();
        });
});






function expwid2img7(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.expwid2img7prv, .expwid2img7mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="expwid2img7prv" /><span style="float:right;cursor: pointer;" class="expwid2img7mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.expwid2img7mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.expwid2img7prv, .expwid2img7mediaremvbtn').remove();
        });
});




function testi1img(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.testi1imgprv, .testi1imgmediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="testi1imgprv" /><span style="float:right;cursor: pointer;" class="testi1imgmediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.testi1imgmediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.testi1imgprv, .testi1imgmediaremvbtn').remove();
        });
});




function testi2img(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.testi2imgprv, .testi2imgmediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="testi2imgprv" /><span style="float:right;cursor: pointer;" class="testi2imgmediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.testi2imgmediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.testi2imgprv, .testi2imgmediaremvbtn').remove();
        });
});






function testi3img1(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.testi3imgprv1, .testi3imgmediaremvbtn1').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="testi3imgprv1" /><span style="float:right;cursor: pointer;" class="testi3imgmediaremvbtn1">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.testi3imgmediaremvbtn1',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.testi3imgprv1, .testi3imgmediaremvbtn1').remove();
        });
});





function testi3img2(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.testi3imgprv2, .testi3imgmediaremvbtn2').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="testi3imgprv2" /><span style="float:right;cursor: pointer;" class="testi3imgmediaremvbtn2">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.testi3imgmediaremvbtn2',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.testi3imgprv2, .testi3imgmediaremvbtn2').remove();
        });
});






function testi3img3(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.testi3imgprv3, .testi3imgmediaremvbtn3').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="testi3imgprv3" /><span style="float:right;cursor: pointer;" class="testi3imgmediaremvbtn3">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.testi3imgmediaremvbtn3',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.testi3imgprv3, .testi3imgmediaremvbtn3').remove();
        });
});








function projects1img(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.projects1imgprv, .projects1imgmediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="projects1imgprv" /><span style="float:right;cursor: pointer;" class="projects1imgmediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.projects1imgmediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.projects1imgprv, .projects1imgmediaremvbtn').remove();
        });
});






function projects2img1(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.projects2img1prv, .projects2img1mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="projects2img1prv" /><span style="float:right;cursor: pointer;" class="projects2img1mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.projects2imgmediaremvbtn1',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.projects2imgprv1, .projects2imgmediaremvbtn1').remove();
        });
});






function projects2img2(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.projects2img2prv, .projects2img2mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="projects2img2prv" /><span style="float:right;cursor: pointer;" class="projects2img2mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.projects2imgmediaremvbtn2',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.projects2imgprv2, .projects2imgmediaremvbtn2').remove();
        });
});



function projects3img1(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.projects3img1prv, .projects3img1mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="projects3img1prv" /><span style="float:right;cursor: pointer;" class="projects3img1mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.projects3imgmediaremvbtn1',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.projects3imgprv1, .projects3imgmediaremvbtn1').remove();
        });
});





function projects3img2(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.projects3img2prv, .projects3img2mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="projects3img2prv" /><span style="float:right;cursor: pointer;" class="projects3img2mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.projects3imgmediaremvbtn2',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.projects3imgprv2, .projects3imgmediaremvbtn2').remove();
        });
});





function projects3img3(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.projects3img3prv, .projects3img3mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="projects3img3prv" /><span style="float:right;cursor: pointer;" class="projects3img3mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.projects3imgmediaremvbtn3',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.projects3imgprv3, .projects3imgmediaremvbtn3').remove();
        });
});







function intro2img(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.intro2imgprv, .intro2mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="intro2imgprv" /><span style="float:right;cursor: pointer;" class="intro2mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.intro2mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.intro2imgprv, .intro2mediaremvbtn').remove();
        });
});









function intro3img(buttonid){

        var custom_uploader;

        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {custom_uploader.open();return; }

        //CREATE THE MEDIA WINDOW
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: "Insert File",
            button: { text: "Insert File"},
            type: "file",
            multiple: false
        });

        //"INSERT MEDIA" ACTION. PREVIEW IMAGE AND INSERT VALUE TO INPUT FIELD
        custom_uploader.on("select", function(){
        var selection = custom_uploader.state().get("selection");
            selection.map( function( attachment ) {
                attachment = attachment.toJSON();
                console.log(attachment);
                console.log(attachment.url);
                
                jQuery('#'+buttonid).parent().find("input[type='text']").val(""+attachment.url+"").trigger("change");
                
                //Preview the Image
                if(attachment.url){
                    jQuery('.intro3imgprv, .intro3mediaremvbtn').remove();
                    jQuery('#'+buttonid).parent().find("input[type='text']").before('<img src="'+attachment.url+'" style="max-width: 100%;overflow: hidden;" class="intro3imgprv" /><span style="float:right;cursor: pointer;" class="intro3mediaremvbtn">X</span>'); 
                }
            });
            
            

        });
        //OPEN THE MEDIA WINDOW
        custom_uploader.open();
    }
    
        jQuery( document ).on( 'load ready widget-added widget-updated', function () {
            jQuery(document).on('click', '.intro3mediaremvbtn',function(e) {
                console.log('click');
                jQuery(this).parent().find("input[type='text']").val('').trigger('change');
                jQuery(this).parent().find('.intro3imgprv, .intro3mediaremvbtn').remove();
        });
});