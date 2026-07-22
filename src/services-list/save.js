import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { heading, columns } = attributes;

	const blockProps = useBlockProps.save( {
		style: { '--wing-columns': columns },
	} );

	const innerBlocksProps = useInnerBlocksProps.save( {
		className: 'wing-services-list__grid',
	} );

	return (
		<div { ...blockProps }>
			{ heading && (
				<RichText.Content
					tagName="h2"
					className="wing-services-list__heading"
					value={ heading }
				/>
			) }
			<div { ...innerBlocksProps } />
		</div>
	);
}
