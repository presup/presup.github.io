/**
 * Upsell notice for theme
 */
 jQuery(window).bind("load", function() {

 // Add Upgrade Message
 if ('undefined' !== typeof tarL10n) {
 upsell = jQuery('<a class="tar-upsell-link"></a>')
 .attr('href', tarL10n.tarURL)
 .attr('target', '_blank')
 .text(tarL10n.tarLabel)
 .css({
 'display' : 'inline-block',
 'background-color' : 'rgb(68, 68, 68)',
 'color' : '#fff',
 'margin-top' : '6px',
 'padding' : '8px 15px',
 'font-size': '11px',
 'letter-spacing': '1px',
 'line-height': '1.5',
 'clear' : 'both',
 'font-weight' : 'bold',
 'text-decoration' : 'none',
 }) ;

  //appending upgrade to PRO fields
 jQuery('#accordion-section-themes h3').append(upsell);


// Remove accordion click event
 jQuery('.resumee-upsell-link').on('click', function(e) {
	 e.stopPropagation();
	});
 }

});