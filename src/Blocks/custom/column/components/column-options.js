import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PanelBody, Icon, RangeControl, ToggleControl, ButtonGroup, Button } from '@wordpress/components';
import { icons, ucfirst } from '@eightshift/frontend-libs/scripts/editor';
import { Responsive, HelpModal } from '@eightshift/frontend-libs/scripts/components';
import manifest from './../manifest.json';

export const ColumnOptions = ({ attributes, setAttributes }) => {
	const { attributes: reset, options } = manifest;

	const width = [
		attributes.widthLarge,
		attributes.widthDesktop,
		attributes.widthTablet,
		attributes.widthMobile,
	];

	const offset = [
		attributes.offsetLarge,
		attributes.offsetDesktop,
		attributes.offsetTablet,
		attributes.offsetMobile,
	];

	const order = [
		attributes.orderLarge,
		attributes.orderDesktop,
		attributes.orderTablet,
		attributes.orderMobile,
	];

	const align = [
		attributes.alignLarge,
		attributes.alignDesktop,
		attributes.alignTablet,
		attributes.alignMobile,
	];

	const hide = [
		attributes.hideLarge,
		attributes.hideDesktop,
		attributes.hideTablet,
		attributes.hideMobile,
	];

	return (
		<PanelBody title={__('Column Details', 'test-theme')}>

			<HelpModal
				type="column"
				buttonLabel={__('How to use a column?', 'test-theme')}
				modalLabel={__('Column', 'test-theme')}
			/>

			<br /><br />

			<Responsive
				label={
					<>
						<Icon icon={icons.width} />
						{__('Width', 'test-theme')}
					</>
				}
			>
				{width.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `width${point}`;

					return (
						<Fragment key={index}>
							<RangeControl
								label={point}
								allowReset={true}
								value={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
								min={options.widths.min}
								max={options.widths.max}
								step={options.widths.step}
								resetFallbackValue={reset[attr].default}
							/>
						</Fragment>
					);
				})}
			</Responsive>

			<Responsive
				label={
					<>
						<Icon icon={icons.offset} />
						{__('Offset', 'test-theme')}
					</>
				}
			>
				{offset.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `offset${point}`;

					return (
						<Fragment key={index}>
							<RangeControl
								label={point}
								allowReset={true}
								value={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
								min={options.offsets.min}
								max={options.offsets.max}
								step={options.offsets.step}
								resetFallbackValue={reset[attr].default}
							/>
						</Fragment>
					);
				})}
			</Responsive>

			<Responsive
				label={
					<>
						<Icon icon={icons.order} />
						{__('Order', 'test-theme')}
					</>
				}
			>
				{order.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `order${point}`;

					return (
						<Fragment key={index}>
							<RangeControl
								label={point}
								allowReset={true}
								value={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
								min={options.orders.min}
								max={options.orders.max}
								step={options.orders.step}
								resetFallbackValue={reset[attr].default}
							/>
						</Fragment>
					);
				})}
			</Responsive>

			<Responsive
				label={
					<>
						<Icon icon={icons.verticalAlign} />
						{__('Vertical align', 'test-theme')}
					</>
				}
			>
				{align.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `align${point}`;

					return (
						<Fragment key={index}>
							<span className="button-group__label">{point}</span>
							<ButtonGroup>
								{options.aligns.map((alignment, alignIndex) => {
									// The default (stretch) doesn't need to be set in the frontend to avoid unnecessary classnames
									const isPressed = (align[index] ?? options.aligns[0].value) == alignment.value;
									const outValue = alignment.value == options.aligns[0].value ? undefined : alignment.value;

									return (
										<Button
											key={alignIndex}
											isPressed={isPressed}
											label={alignment.label}
											onClick={() => setAttributes({ [attr]: outValue })}
											icon={icons[`verticalAlign${ucfirst(alignment.value)}24`]}
										/>
									);
								}
								)}
							</ButtonGroup>
						</Fragment>
					);
				})}
			</Responsive>

			<Responsive
				label={
					<>
						<Icon icon={icons.hide} />
						{__('Hide', 'test-theme')}
					</>
				}
			>
				{hide.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `hide${point}`;

					return (
						<Fragment key={index}>
							<ToggleControl
								label={point}
								checked={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
							/>
						</Fragment>
					);
				})}
			</Responsive>
		</PanelBody>
	);
};
