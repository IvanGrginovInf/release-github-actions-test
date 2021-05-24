<?php

/**
 * Template for the Lists Block view.
 *
 * @package ReleaseGithubActionsTest
 */

use ReleaseGithubActionsTest\Blocks\Blocks;
use ReleaseGithubActionsTestVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);
$blockName = $attributes['blockName'] ?? $manifest['blockName'];

echo Components::render(
	'lists',
	Blocks::props($attributes, $blockName, '', true)
);
