import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { getComponent } from '@stackbit/components/dist/components-registry';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';
import getPageUrlPath from '@stackbit/components/dist/utils/get-page-url-path';
import Link from '@stackbit/components/dist/utils/link';

export default function TwoRowFeaturedPostsSection(props) {
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
                'sb-component-featured-posts-section',
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
        >
            <div className={classNames('flex', 'w-full', sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null)}>
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    {featuredPostsHeader(props)}
                    <FeaturedPostsContent {...props} />
                    {featuredPostsActions(props)}
                </div>
            </div>
        </div>
    );
}

function featuredPostsHeader(props) {
    if (!props.title && !props.subtitle) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 
                    className={classNames([
                        'big-responsive-title', // Defined in theme.css with `@apply`s
                        styles.title ? mapStyles(styles.title) : null,
                        'mb-12',
                        'md:mb-18'
                    ])}
                    data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null)} data-sb-field-path=".subtitle">
                    {props.subtitle}
                </p>
            )}
        </div>
    );
}

function featuredPostsActions(props) {
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
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function TopFourRow(props) {
    const ImageBlock = getComponent('ImageBlock');
    const posts = props.posts || [];

    return (
        <div className="flex flex-wrap gap-6 justify-between my-2 md:my-8" data-sb-field-path=".posts">
            {posts.map((post, index) => (
                <div key={index} className="w-full sm:w-1/5 flex-grow my-6 sb-card" data-sb-object-id={post.__metadata?.id}>
                    {post.featuredImage && (
                        <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImage">
                            <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                        </Link>
                    )}
                    <div className="px-4 py-6">
                        {props.showDate && postDate(post.date)}
                        <h2 className="text-md text-white">
                            <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                {post.title}
                            </Link>
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

function BottomTwoRow(props) {
    const ImageBlock = getComponent('ImageBlock');
    const posts = props.posts || [];

    return (
        <div className="flex flex-wrap gap-6 justify-between" data-sb-field-path=".posts">
            {posts.map((post, index) => {
                const sizeClass = index % 2 === 0 ? 'sm:w-1/4' : 'sm:w-1/2'; 
                return (<div key={index}
                    className={classNames([
                        sizeClass,
                        'w-full',
                        'h-72',
                        'md:h-56',
                        'flex-grow',
                        'sb-card',
                        'my-4',
                        'flex',
                        'flex-col'
                    ])}
                    data-sb-object-id={post.__metadata?.id}
                >
                    <div className="sb-card-image-container relative bg-red-500 h-full w-full">
                        <ImageBlock {...post.featuredImage} className="absolute h-full w-full object-cover" />
                    </div>
                    <div className="px-4 py-6">
                        {props.showDate && postDate(post.date)}
                        <h2 className="text-md text-white">
                            <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                {post.title}
                            </Link>
                        </h2>
                    </div>
                </div>);
            })}
        </div>
    );
}

/**
 * Formats 6 posts like this:
 * [ ] [ ] [ ] [ ]
 * [       ] [   ]
 * @param {*} props
 * @returns
 */
function FeaturedPostsContent(props) {
    const posts: Array<any> = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    
    const topFourPosts = posts.slice(0, 4);
    const bottomTwoPosts = posts.slice(4, 6);

    return (<>
        <TopFourRow posts={topFourPosts} />
        <BottomTwoRow posts={bottomTwoPosts} />
    </>);
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
