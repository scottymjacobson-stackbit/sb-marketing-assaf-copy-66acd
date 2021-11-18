/* Extended from FeaturedPostsSection to add supertitle and fix width / column alignment */
import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { getComponent } from '@stackbit/components/dist/components-registry';
import { mapStylesToClassNames as mapStyles } from '@stackbit/components/dist/utils/map-styles-to-class-names';
import getPageUrlPath from '@stackbit/components/dist/utils/get-page-url-path';
import Link from '@stackbit/components/dist/utils/link';

export default function FeaturedPostsSection(props) {
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
            data-sb-field-path={props.annotationPrefix}
        >
            <div className={classNames('flex', 'w-full', sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null)}>
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    {featuredPostsHeader(props)}
                    {featuredPostsVariants(props)}
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
            {props.supertitle && (
                <p className={classNames('sb-supertitle', 'uppercase', 'text-xl', 'text-center', 'text-complementary', 'pb-4', 'tracking-widest', 'mb-2')} data-sb-field-path=".supertitle">
                    {props.supertitle}
                </p>
            )}
            {props.title && (
                <h2 className={classNames('big-responsive-title', styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
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
            className={classNames('flex', 'flex-wrap', 'items-center', 'mt-12', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
            data-sb-field-path=".actions"
        >
            {props.actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" annotationPrefix={`.${index}`} />
            ))}
        </div>
    );
}

function featuredPostsVariants(props) {
    const variant = props.variant || 'variant-a';
    switch (variant) {
    case 'variant-a':
        return postsVariantA(props);
    case 'variant-b':
        return postsVariantB(props);
    case 'variant-c':
        return postsVariantC(props);
    case 'variant-d':
        return postsVariantD(props);
    }
    return null;
}

function postsVariantA(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8" data-sb-field-path=".posts">
            {posts.map((post, index) => (
                <article key={index} className="sb-card" data-sb-object-id={post.__metadata?.id}>
                    {post.featuredImage && (
                        <Link href={getPageUrlPath(post)} className="block h-0 w-full pt-9/16 relative" data-sb-field-path="featuredImage">
                            <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                        </Link>
                    )}
                    <div className="px-4 py-6 sm:px-6 sm:pb-10">
                        {props.showDate && postDate(post.date)}
                        {props.title ? (
                            <h3 className="text-xl sm:text-2xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h3>
                        ) : (
                            <h2 className="text-xl sm:text-2xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h2>
                        )}
                        {props.showAuthor && post.author && postAuthor(post.author)}
                        {post.excerpt && (
                            <p className="mt-3" data-sb-field-path="excerpt">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

function postsVariantB(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div className="w-full flex gap-8" data-sb-field-path=".posts">
            {posts.map((post, index) => (
                <article
                    key={index}
                    className={classNames('',
                        (index % 2 === 0) ? 'w-4/5': 'w-1/2', // One column smaller than the other
                    )}
                    data-sb-object-id={post.__metadata?.id}
                >
                    {post.featuredImage && (
                        <Link
                            href={getPageUrlPath(post)}
                            className="block h-0 w-full pt-9/16 relative md:pt-0 sm:h-44"
                            data-sb-field-path="featuredImage"
                        >
                            <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                        </Link>
                    )}
                    <div className="px-4 py-6 sm:px-6 sm:pb-10">
                        {props.showDate && postDate(post.date)}
                        {props.title ? (
                            <h3 className="text-xl sm:text-2xl font-normal">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h3>
                        ) : (
                            <h2 className="text-xl sm:text-2xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h2>
                        )}
                        {props.showAuthor && post.author && postAuthor(post.author)}
                        {post.excerpt && (
                            <p className="mt-3 text-xl leading-relaxed" data-sb-field-path="excerpt">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

function postsVariantC(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8" data-sb-field-path=".posts">
            {posts.map((post, index) => {
                const isFullWidth = index % 4 === 0;
                return (
                    <article
                        key={index}
                        className={classNames('sb-card', {
                            'md:col-span-3 md:flex': isFullWidth
                        })}
                        data-sb-object-id={post.__metadata.id}
                    >
                        {post.featuredImage && (
                            <div
                                className={classNames({
                                    'md:w-2/5': isFullWidth
                                })}
                            >
                                <Link
                                    href={getPageUrlPath(post)}
                                    className={classNames('block', 'h-0', 'w-full', 'pt-9/16', 'relative', {
                                        'md:h-60 md:min-h-full md:pt-0 lg:h-72': isFullWidth
                                    })}
                                    data-sb-field-path="featuredImage"
                                >
                                    <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </Link>
                            </div>
                        )}
                        <div
                            className={classNames('px-4 pt-6 pb-8 sm:px-6', {
                                'md:w-3/5 md:pt-8 md:pb-10': isFullWidth
                            })}
                        >
                            {props.showDate && postDate(post.date)}
                            {props.title ? (
                                <h3
                                    className={classNames('text-xl', 'sm:text-2xl', {
                                        'md:text-3xl': isFullWidth
                                    })}
                                >
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h3>
                            ) : (
                                <h2
                                    className={classNames('text-xl', 'sm:text-2xl', {
                                        'md:text-3xl': isFullWidth
                                    })}
                                >
                                    <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                        {post.title}
                                    </Link>
                                </h2>
                            )}
                            {props.showAuthor && post.author && postAuthor(post.author)}
                            {post.excerpt && (
                                <p className="mt-3" data-sb-field-path="excerpt">
                                    {post.excerpt}
                                </p>
                            )}
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

function postsVariantD(props) {
    const posts = props.posts || [];
    if (posts.length === 0) {
        return null;
    }
    const ImageBlock = getComponent('ImageBlock');
    return (
        <div data-sb-field-path=".posts">
            {posts.map((post, index) => (
                <article key={index} className="sb-card mb-8 md:flex" data-sb-object-id={post.__metadata.id}>
                    {post.featuredImage && (
                        <div className="md:w-2/5">
                            <Link
                                href={getPageUrlPath(post)}
                                className="block h-0 w-full pt-9/16 relative md:h-60 md:min-h-full md:pt-0 lg:h-72"
                                data-sb-field-path="featuredImage"
                            >
                                <ImageBlock {...post.featuredImage} className="absolute left-0 top-0 h-full w-full object-cover" />
                            </Link>
                        </div>
                    )}
                    <div className="px-4 pt-6 pb-8 sm:px-6 md:w-3/5 md:pt-8 md:pb-10">
                        {props.showDate && postDate(post.date)}
                        {props.title ? (
                            <h3 className="text-xl sm:text-2xl md:text-3xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h3>
                        ) : (
                            <h2 className="text-xl sm:text-2xl md:text-3xl">
                                <Link href={getPageUrlPath(post)} data-sb-field-path="title">
                                    {post.title}
                                </Link>
                            </h2>
                        )}
                        {props.showAuthor && post.author && postAuthor(post.author)}
                        {post.excerpt && (
                            <p className="mt-3" data-sb-field-path="excerpt">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

function postDate(date) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MMMM D, YYYY');
    return (
        <div className="text-sm mb-1">
            <time dateTime={dateTimeAttr} data-sb-field-path="date">
                {formattedDate}
            </time>
        </div>
    );
}

function postAuthor(author) {
    return (
        <div className="text-sm mt-1">
            By{' '}
            <span data-sb-field-path="author">
                {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
                {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
            </span>
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
