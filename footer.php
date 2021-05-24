<?php

/**
 * Display footer
 *
 * @package ReleaseGithubActionsTest
 */

use ReleaseGithubActionsTestVendor\EightshiftLibs\Helpers\Components;

?>

</main>

<?php
echo Components::render( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	'layout-three-columns',
	[
		'selectorClass' => 'footer',
		'layoutLeft' => Components::render(
			'copyright',
			[
				'copyrightBy' => esc_html__('Eightshift', 'release-github-actions-test'),
				'copyrightYear' => gmdate('Y'),
				'copyrightContent' => esc_html__('Made with 🧡  by Eightshift team', 'release-github-actions-test'),
			]
		),
		'layoutRight' => Components::render(
			'menu',
			[
				'variation' => 'horizontal'
			]
		),
	]
);

wp_footer();
?>
</body>
</html>
