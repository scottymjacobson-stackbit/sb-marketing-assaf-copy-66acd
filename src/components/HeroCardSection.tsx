import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getComponent } from '@stackbit/components/dist/components-registry';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';

export default function HeroCardSection(props) {
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-hero-card-section',
                colors,
                'flex',
                'flex-col',
                'px-4',
                'sm:px-8',
                'relative',
                sectionStyles.margin,
                sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                sectionStyles.borderColor,
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : null
            )}
            style={{
                borderWidth: `${sectionBorderWidth}px`
            }}
            data-sb-field-path={props.annotationPrefix}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col',
                    'max-w-screen-2xl',
                    'mx-auto',
                    'relative',
                    'flex-grow',
                    'w-full',
                    sectionStyles.padding,
                    sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : null,
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('sb-hero-card-contents', 'box-border', 'py-10', 'px-10', 'relative', 'w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    {/* Background image should cover background of card's "contents" div */}
                    {props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
                    <div className={classNames('sb-hero-card-contents-body-actions-feature', 'relative', 'flex', sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : null)}>
                        <div className="sb-hero-card-contents-body-actions my-3 flex-1 px-4 w-full">
                            {heroBody(props)}
                            {heroActions(props)}
                        </div>
                        {props.feature && (
                            <div className="sb-hero-card-feature my-3 flex-1 px-4 w-full" data-sb-field-path=".feature">
                                {heroFeature(props.feature)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function heroFeature(feature) {
    const featureType = feature.type;
    if (!featureType) {
        throw new Error('hero section feature does not have the \'type\' property');
    }
    const Feature = getComponent(featureType);
    if (!Feature) {
        throw new Error(`no component matching the hero section feature type: ${featureType}`);
    }
    return <Feature {...feature} />;
}

function heroBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageStyles = image.styles?.self || {};
    const imageOpacity = imageStyles.opacity || imageStyles.opacity === 0 ? imageStyles.opacity : 100;
    return (
        <span
            className="sb-hero-card-background-image bg-cover bg-center block absolute inset-0"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                opacity: imageOpacity * 0.01
            }}
            aria-label={image.altText}
            data-sb-field-path=".backgroundImage.url#@style .backgroundImage.altText#@aria-label"
        />
    );
}

function heroBody(props) {
    const styles = props.styles || {};

    return (
        <div>
            {props.title && (
                <h2 className={classNames('text-5xl', 'md:text-6xl', 'md:leading-snug', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'leading-normal', styles.text && mapStyles(styles.text))}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function heroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
    case 'auto':
        return 'min-h-0';
    case 'screen':
        return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
    case 'narrow':
        return 'max-w-screen-lg';
    case 'wide':
        return 'max-w-screen-xl';
    case 'full':
        return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
    case 'row':
        return ['flex-col-reverse', 'lg:flex-row'];
    case 'row-reverse':
        return ['flex-col-reverse', 'lg:flex-row-reverse'];
    case 'col':
        return ['flex-col'];
    case 'col-reverse':
        return ['flex-col-reverse'];
    }
    return null;
}
