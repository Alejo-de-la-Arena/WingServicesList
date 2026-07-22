import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { title, description, imageUrl, imageAlt } = attributes;

	const blockProps = useBlockProps.save( { className: 'wing-service-item' } );

	return (
		<div { ...blockProps }>
			{ imageUrl && (
				<div className="wing-service-item__media">
					<img src={ imageUrl } alt={ imageAlt } />
				</div>
			) }
			<RichText.Content
				tagName="h3"
				className="wing-service-item__title"
				value={ title }
			/>
			<RichText.Content
				tagName="p"
				className="wing-service-item__description"
				value={ description }
			/>
		</div>
	);
}
