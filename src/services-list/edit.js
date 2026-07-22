import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

const ALLOWED_BLOCKS = [ 'wing/service-item' ];

// Pre-fill the block with three empty items to match the wireframe.
const TEMPLATE = [
	[ 'wing/service-item', {} ],
	[ 'wing/service-item', {} ],
	[ 'wing/service-item', {} ],
];

export default function Edit( { attributes, setAttributes } ) {
	const { heading, columns } = attributes;

	const blockProps = useBlockProps( {
		style: { '--wing-columns': columns },
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'wing-services-list__grid' },
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			orientation: 'horizontal',
		}
	);

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Layout', 'wing-services-list' ) }>
					<RangeControl
						label={ __( 'Columns', 'wing-services-list' ) }
						value={ columns }
						onChange={ ( value ) =>
							setAttributes( { columns: value } )
						}
						min={ 1 }
						max={ 4 }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<RichText
					tagName="h2"
					className="wing-services-list__heading"
					value={ heading }
					onChange={ ( value ) =>
						setAttributes( { heading: value } )
					}
					placeholder={ __( 'Our Services', 'wing-services-list' ) }
				/>
				<div { ...innerBlocksProps } />
			</div>
		</>
	);
}
