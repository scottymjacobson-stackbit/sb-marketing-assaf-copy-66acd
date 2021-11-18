import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getComponent } from '@stackbit/components/dist/components-registry';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';

export default function TwoColumnBlurbSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={cssId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-two-column-blurb-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                sectionStyles.margin,
                sectionStyles.padding,
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
                    'relative',
                    'w-full',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    <HeroHeader {...props} />
                    {/* Grid with two columns */}
                    <div className='grid grid-cols-2 gap-12' data-sb-field-path=".blurbs">
                        {(props.blurbs || []).map((blurb, index) => {
                            return <BlurbItem key={`blurb-${index}`} annotationPrefix={`.${index}`} text={blurb.content} action={blurb.action} styles={props.styles?.text} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

const DELIMITER = '||';

function BlurbItem({ text, action, styles, annotationPrefix }) {
    const Action = getComponent('Action');

    return text && (
        <div data-sb-field-path={annotationPrefix}>
            <Markdown
                options={{ forceBlock: true, forceWrapper: true }}
                className={classNames('sb-markdown', 'md:text-lg', styles ? mapStyles(styles) : null)}
                data-sb-field-path=".content"
            >
                {text}
            </Markdown>
            <div
                className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                data-sb-field-path=".action"
            >

                {action && <Action {...action} className="mb-3 mx-2 lg:whitespace-nowrap text-complementary" />}
            </div>
        </div>
    );
}

function HeroHeader(props) {
    const styles = props.styles || {};

    return (<div className='section-header mb-24'>
        {props.supertitle && (
            <p className={classNames('supertitle', 'uppercase', 'text-xs', 'text-left', 'text-complementary', 'pb-4', 'tracking-widest')} data-sb-field-path=".supertitle">
                {props.supertitle}
            </p>
        )}
        {props.title && (
            <h2 className={classNames('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-6xl', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                {props.title.split(DELIMITER)[0]}
                <wbr /> {/* One attempt to force the word break between the different styled text (see below) */}
                <span style={{ WebkitTextStrokeColor: 'white', WebkitTextStrokeWidth: '0.01px', color: 'transparent' }}>
                    {props.title.split(DELIMITER)[1].replace(' ', '\u00A0')} {/* The unicode is a non-breaking space; we try to get the browser to break at the break, not inside the span*/}
                </span>
            </h2>
        )}
        {props.subtitle && (
            <p className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
                {props.subtitle}
            </p>
        )}
    </div>);
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
        return 'max-w-screen-lg';
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
