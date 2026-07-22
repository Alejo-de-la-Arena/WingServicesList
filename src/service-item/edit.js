import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
} from '@wordpress/block-editor';
import {
	Button,
	Placeholder,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { title, description, imageId, imageUrl, imageAlt } = attributes;

	const blockProps = useBlockProps( { className: 'wing-service-item' } );

	const onSelectImage = ( media ) => {
		setAttributes( {
			imageId: media.id,
			imageUrl: media.url,
			imageAlt: media.alt || '',
		} );
	};

	const removeImage = () => {
		setAttributes( { imageId: undefined, imageUrl: '', imageAlt: '' } );
	};

	return (
		<div { ...blockProps }>
			{ imageUrl && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectImage }
								allowedTypes={ [ 'image' ] }
								value={ imageId }
								render={ ( { open } ) => (
									<ToolbarButton onClick={ open }>
										{ __(
											'Replace image',
											'wing-services-list'
										) }
									</ToolbarButton>
								) }
							/>
						</MediaUploadCheck>
						<ToolbarButton onClick={ removeImage }>
							{ __( 'Remove image', 'wing-services-list' ) }
						</ToolbarButton>
					</ToolbarGroup>
				</BlockControls>
			) }

			<div className="wing-service-item__media">
				{ imageUrl ? (
					<img src={ imageUrl } alt={ imageAlt } />
				) : (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectImage }
							allowedTypes={ [ 'image' ] }
							value={ imageId }
							render={ ( { open } ) => (
								<Placeholder
									icon="format-image"
									label={ __(
										'Service image',
										'wing-services-list'
									) }
									className="wing-service-item__placeholder"
								>
									<Button variant="primary" onClick={ open }>
										{ __(
											'Select image',
											'wing-services-list'
										) }
									</Button>
								</Placeholder>
							) }
						/>
					</MediaUploadCheck>
				) }
			</div>

			<RichText
				tagName="h3"
				className="wing-service-item__title"
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
				placeholder={ __( 'Service title', 'wing-services-list' ) }
			/>
			<RichText
				tagName="p"
				className="wing-service-item__description"
				value={ description }
				onChange={ ( value ) =>
					setAttributes( { description: value } )
				}
				placeholder={ __(
					'Short description of the service...',
					'wing-services-list'
				) }
			/>
		</div>
	);
}
