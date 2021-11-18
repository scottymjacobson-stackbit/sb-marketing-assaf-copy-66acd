import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getComponent } from '@stackbit/components/dist/components-registry';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';

export default function HeroSectionWithOutlineTitle(props) {
    const colors = props.colors || 'colors-a';
    const backgroundWidth = props.backgroundWidth || 'full';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={props.elementId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                backgroundWidth === 'inset' ? 'sb-component-section-inset' : null,
                'sb-component-hero-section',
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
            {props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
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
                <div className={classNames('relative', 'w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    <div className={classNames('flex', '-mx-4', sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : null)}>
                        <div className="my-3 flex-1 px-4 w-full">
                            {heroBody(props)}
                            {heroActions(props)}
                        </div>
                        {props.feature && (
                            <div className="my-3 flex-1 px-4 w-full" data-sb-field-path=".feature">
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
            className="bg-cover bg-center block absolute inset-0"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                opacity: imageOpacity * 0.01
            }}
            aria-label={image.altText}
            data-sb-field-path=".backgroundImage.url#@style .backgroundImage.altText#@aria-label"
        />
    );
}

// We do these by hand here because we want them to be responsive, and you can't get responsive from mapStyles on fontSize from content / Studio
const HUGE_TITLE_CLASSES = ['text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl', 'xl:text-8xl'];
const TEXT_AS_SUBTITLE_CLASSES = ['leading-relaxed', 'text-sm', 'sm:text-md', 'md:text-lg', 'lg:text-xl', 'xl:text-2xl'];

const DELIMITER = '||';

function heroBody(props) {
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames(...HUGE_TITLE_CLASSES, styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title.split(DELIMITER)[0]}
                    <br />
                    <span style={{ WebkitTextStrokeColor: 'white', WebkitTextStrokeWidth: '0.01px', color: 'transparent' }}>{props.title.split(DELIMITER)[1]}</span>
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-m', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
            {/* The text serves as a subtitle, but uses the markdown `text` field in order to support linebreaks */}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sb-hero-text-as-subtitle', ...TEXT_AS_SUBTITLE_CLASSES, styles.text ? mapStyles(styles.text) : null)}
                    data-sb-field-path=".text"
                >
                    {/* Styling note: linebreaks / spacing are actualy handled by margins between <p> elements (the way markdown renders linebreaks) */}
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
        return 'max-w-screen-md';
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
        return ['flex-col', 'lg:flex-row'];
    case 'row-reverse':
        return ['flex-col-reverse', 'lg:flex-row-reverse'];
    case 'col':
        return ['flex-col'];
    case 'col-reverse':
        return ['flex-col-reverse'];
    }
    return null;
}
