<?php

/**
 * Template for the Card Block.
 *
 * @package ReleaseGithubActionsTest
 */

use ReleaseGithubActionsTest\Blocks\Blocks;
use ReleaseGithubActionsTestVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);
$blockName = $attributes['blockName'] ?? $manifest['blockName'];

echo Components::render(
	'card',
	Blocks::props($attributes, $blockName, '', true)
);
