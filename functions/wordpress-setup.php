<?php



// Add Featured Image Support
 add_theme_support( 'post-thumbnails' );
/* Create Required Pages
---------------------------------------------------------------------------------------------------- */

function theme_required_pages()
{
  // Define the pages.
  $pages = array(
		'About' => 'About',
		'Portfolio' => 'Portfolio',
		'Contacts' => 'Contacts',
		'Portrait' => 'Portrait',
		'Landscape' => 'Landscape',
		'Reportage' => 'Reportage',
		'Architecture-and-interiors' => 'Architecture and interiors',
		'Price' => 'Price'

  );

  // Create the pages.
  foreach ( $pages as $page_slug => $page_title ) {

    // Check if a page with this slug exists using WP_Query.
    $q = new WP_Query( array(
      'post_type'      => 'page',
      'name'           => sanitize_title( $page_slug ), // check by slug
      'fields'         => 'ids',
      'posts_per_page' => 1,
      'no_found_rows'  => true,
    ) );

    // If the page doesn't already exist, create it.
    if ( ! $q->have_posts() ) {
      $page = array(
        'post_type'    => 'page',
        'post_title'   => $page_title,
        'post_content' => '',
        'post_status'  => 'publish',
        'post_author'  => 1,
        'post_name'    => $page_slug,
      );
      wp_insert_post( $page );
    }
  }
}

add_action( 'after_switch_theme', 'theme_required_pages' );

/* Add HTML5 Custom Theme Support
---------------------------------------------------------------------------------------------------- */
function custom_theme_setup() {
	add_theme_support( 'html5', array( 'comment-list' ) );
}
add_action( 'after_setup_theme', 'custom_theme_setup' );


// Stop wrapping archive descriptions in tags
remove_filter('term_description','wpautop');

// Get Post tag links
function get_post_tag_links($seperator){
	$tags = wp_get_post_tags(get_the_ID());
	$html = '';
	$lastTag = end($tags);
	foreach ( $tags as $tag ){
	$tag_link = get_tag_link( $tag->term_id );
	$html .= "<a href='{$tag_link}' class='wordpress-post-tag'>{$tag->name}</a>";
		if ($tag != $lastTag) {
			$html .= $seperator;
		}
	}
	return $html;
}

// Get Template Asset
function get_template_asset_path($path){

	$assetPath = get_template_directory_uri();
	$assetPath .= $path;
	return $assetPath;
}

// Add Logo Customizer Function
function customise_theme_logo( $wp_customize ) {
	$wp_customize->add_section( 'theme_logo_img_section' , array(
	'title'       => __( 'Logo', 'themeslug' ),
	'priority'   => 30,
	'description' => 'Select a logo image to replace the default one'));
	$wp_customize->add_setting( 'theme_logo_img' );
	$wp_customize->add_control( new WP_Customize_Image_Control(
	$wp_customize, 'theme_logo_img', array(
	'label'   => __( 'Logo', 'themeslug' ),
	'section' => 'theme_logo_img_section',
	'settings' => 'theme_logo_img',
	)));
}
add_action( 'customize_register', 'customise_theme_logo' );

// Colour Customizer Function
function customise_theme_color_picker( $wp_customize) {
    
    // Add Theme Colour Section
    $wp_customize->add_section( 'theme_color_section', array(
        'title' => 'Theme Colours',
        'description' => 'Set theme colours.',
        'priority' => 40
    ));
    
    // Create Colour Settings UI
    $colorArray = [array('name' => 'background', 'color' => '#FFFFFF')];

    foreach ($colorArray as $colorData)
    {
    	$colorKey = $colorData['name'];
    	$colorValue = $colorData['color'];
    	$colorSettingKey = 'theme_'.$colorKey.'_color';

	    // Add Settings
	    $wp_customize->add_setting( $colorSettingKey, array('default' => esc_html($colorValue)));
	    
	    // Add Controls
	    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, $colorSettingKey, array(
	        'label' => ucfirst($colorKey).' Color',
	        'section' => 'theme_color_section',
	        'settings' => $colorSettingKey
	    
	    )));
	} 
}
add_action( 'customize_register', 'customise_theme_color_picker' );

// Add Custom Colour CSS to Page
function generate_theme_custom_colours() {

	// Generate Global Colours
    $colorArray = ['background'];
    $colorRuleArray = [];

    foreach ($colorArray as $colorKey)
    {
    	 $colorValue = get_theme_mod('theme_'.$colorKey.'_color');

    	 if ( !empty( $colorValue )) // Has Colour Value
    	 {
    	 	$rule = '--swatch-var-'.$colorKey.':'.esc_html($colorValue);
    	 	array_push($colorRuleArray,$rule);
    	 }
    }

    // Build CSS Rules
    $colourCSS = '';

    // Add Background Colour
    $bgColor = get_theme_mod('theme_background_color');
    
    if (!empty( $bgColor ))
    {
		$colourCSS .= 'body {background: '.esc_html($bgColor).';}';
    }

    // Add Global Colours
    if ($colorRuleArray)
    {
    	$colourCSS .= ':root{'.implode(";",$colorRuleArray).'}';
    }

    if (!empty( $colourCSS ))
    {
    	 echo '<style type="text/css" id="theme-custom-colour-css">'.esc_html($colourCSS).'</style>';
    }
}
add_action('wp_head', 'generate_theme_custom_colours');

/* Get Excerpt Text
---------------------------------------------------------------------------------------------------- */

function the_excerpt_text( $post_id = null ){
    $post_id = $post_id ?: get_the_ID();
    if ( ! $post_id ) return;

    remove_filter( 'the_excerpt', 'wpautop' );
    $excerpt = get_the_excerpt( $post_id );
    add_filter( 'the_excerpt', 'wpautop' );

    echo $excerpt;
}
