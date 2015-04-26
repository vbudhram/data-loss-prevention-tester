/**
 * Created by vijay.budhram on 4/25/15.
 */
$('.button-collapse').sideNav({
			menuWidth: 300, // Default is 240
			edge: 'left', // Choose the horizontal origin
			closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		}
);

$(document).ready(function(){
	$('.slider').slider({full_width: true});
    $('select').not('.disabled').material_select();
});

