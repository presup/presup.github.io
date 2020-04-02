/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title a, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title a, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title a, .site-description' ).css( {
					'color': to
				} );
			}
		} );
	} );


    //Nav Hamburger bg color
	wp.customize( 'resumee[nav_color]', function( value ) {
        value.bind( function( to ) {
            $( '.menu-toggle' ).css( 'background', to );
        } );
    });

    // site title color
    wp.customize( 'resumee[site_title_color]', function( value ) {
        value.bind( function( to ) {
            $( '.site-title a' ).css( 'color', to );
        } );
    });


    //Nav Hamburger icon color
    wp.customize( 'resumee[nav_icon_color]', function( value ) {
        value.bind( function( to ) {
            $( '.menu-toggle i.fa.fa-bars' ).css( 'color', to );
        } );
    });

    //header bg color
	wp.customize( 'resumee[nav_background]', function( value ) {
        value.bind( function( to ) {
            $( '#masthead' ).css( 'background-color', to );
        } );
    });









    //site font family
     wp.customize( 'resumee[body_font_family]', function( value ) {
        value.bind( function( to ) {            
            $( 'body' ).css('font-family', to );            
        } );
    });  

     //Site Line height
     wp.customize( 'resumee[body_line_height]', function( value ) {
        value.bind( function( to ) {             
            $( 'body' ).css( 'line-height', to + 'em' );            
        } );
    });

    //Site Font Size
     wp.customize( 'resumee[body_font_size]', function( value ) {
        value.bind( function( to ) {             
            $( 'body' ).css( 'font-size', to + 'px' );            
        } );
    });  

    // svg background
    wp.customize( 'resumee[svgimg]', function( value ) {
        value.bind( function( to ) {
            $( 'body' ).css( 'background-image', 'url( "' + to + '");' );
        } );
    });











    // Colophon text
	wp.customize( 'colophon_txt', function( value ) {
		value.bind( function( to ) {
			$( '.first_word' ).text( to );
		} );
	} );

    //footer bg color
    wp.customize( 'resumee[footer_bg_color]', function( value ) {
        value.bind( function( to ) {
            $( '#colophon' ).css( 'background-color', to );
        } );
    });

	//Colophon text color
	wp.customize( 'resumee[colophon_txt_color]', function( value ) {
        value.bind( function( to ) {
            $( '.footer_address span, .site-info' ).css( 'color', to );
        } );
    });

    //scroll to top bg color
    wp.customize( 'resumee[scrolltopbg]', function( value ) {
        value.bind( function( to ) {
            $( 'i.fa.fa-chevron-up' ).css( 'background-color', to );
        } );
    });

    //scroll to top icon color
    wp.customize( 'resumee[scrolltopicon]', function( value ) {
        value.bind( function( to ) {
            $( 'i.fa.fa-chevron-up' ).css( 'color', to );
        } );
    });


    //scroll to top icon border
    wp.customize( 'resumee[scrolltopborder]', function( value ) {
        value.bind( function( to ) {
            $( 'i.fa.fa-chevron-up' ).css( 'border-radius', to + '%');
        } );
    });

    // Site info toggle
    wp.customize( 'resumee[hide_credit]', function( value ) {
    value.bind( function( to ) {
        if ( true === to) {
            $( '.site-info' ).show();
          } else {
            $( '.site-info' ).hide();
          }
        } );
    } );




} )( jQuery );