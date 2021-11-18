---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-e
    backgroundWidth: full
    title: The site builder for||developers & marketers
    text: |
      Developers fully own the code.

      Content creators have a rich visual editor with live preview.

      Build with today's best practices.
    actions:
      - type: Button
        label: Get Started
        url: 'https://www.stackbit.com/'
        style: primary
        elementId: hero-main-button
        showIcon: false
        icon: instagram
    styles:
      self:
        height: screen
        width: full
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: col
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-neutral
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
        margin:
          - mt-12
          - mb-10
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-6
      text:
        textAlign: center
        margin:
          - mt-0
          - mb-8
      actions:
        justifyContent: center
    feature:
      url: >-
        https://res.cloudinary.com/stackbit/video/upload/v1637180123/bg-intro-2_drvqh3.mp4
      autoplay: true
      loop: true
      muted: true
      controls: false
      elementId: ''
      type: VideoBlock
      thumbnailUrl: /images/Main image.svg
  - colors: colors-e
    backgroundWidth: full
    elementId: logos-section
    title: Fast websites || without lock-in
    images:
      - url: /images/github-logo-2-white.svg
        caption: Github
        altText: Github
      - url: /images/reactjs-fill-svgrepo-com.svg
        altText: ReactJS
        caption: ReactJS
      - url: /images/nextjs-svgrepo-com-white.svg
        altText: Photo of Diamond Eagle
        caption: Diamond Eagle
      - url: /images/markdown-svgrepo-com-white.svg
        altText: Markdown
        caption: Markdown
      - altText: lorem-ipsum
        caption: lorem-ipsum
        elementId: ''
        styles:
          self:
            opacity: 100
        type: ImageBlock
        url: /images/tailwindcss-svgrepo-com-white.svg
    spacing: 3
    columns: '5'
    imageSizePx: 50
    showCaption: false
    enableHover: true
    styles:
      self:
        width: full
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-4
          - pb-4
        height: screen
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-12
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
    type: MediaGallerySection
    supertitle: Less than 60 seconds to a production grade website
  - elementId: ''
    colors: colors-e
    backgroundWidth: full
    title: "In-context visual\_editing"
    text: >
      Always work with a live preview, never in the dark. Add pages, tweak
      content, change layouts.
    actions:
      - type: Button
        label: Try it out
        url: /
        style: primary
        elementId: hero-main-button
    feature:
      type: ImageBlock
      url: /images/Feature 1-2ba6011a.png
      altText: Hero section image
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-12
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        fontSize: xx-large
        textAlign: left
        margin:
          - mt-2
          - mb-6
      actions:
        justifyContent: flex-start
    type: HeroCardSection
  - elementId: ''
    colors: colors-e
    backgroundWidth: full
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: 'CMS, Preconfigured'
    text: >
      Designed by schema nerds, saved as Markdown, stored in Git. It doesn't get
      more portable.
    actions:
      - type: Button
        label: How our content model works
        url: /
        style: link
        elementId: hero-main-button
        icon: arrowRight
        showIcon: true
        iconPosition: left
    feature:
      type: ImageBlock
      url: /images/Feature 2-ee0920f8.png
      altText: Hero section image
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-12
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        fontSize: xx-large
        textAlign: left
        margin:
          - mt-2
          - mb-6
      actions:
        justifyContent: flex-start
    type: HeroCardSection
  - elementId: ''
    colors: colors-e
    backgroundWidth: full
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: A stacked component library
    text: |
      Ready for visual editing and fully customizable.

      Fully open source, no black box.
    actions:
      - type: Button
        label: See Documentation
        url: /
        style: link
        elementId: hero-main-button
        showIcon: true
        icon: arrowRight
        iconPosition: left
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-12
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        fontSize: xx-large
        textAlign: left
        margin:
          - mt-2
          - mb-6
      actions:
        justifyContent: flex-start
    type: HeroCardSection
    feature:
      url: >-
        https://res.cloudinary.com/stackbit/video/upload/v1637247474/homepage-components_dd9les.mp4
      autoplay: true
      loop: true
      muted: false
      controls: true
      elementId: ''
      type: VideoBlock
  - elementId: ''
    colors: colors-e
    backgroundWidth: inset
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
      url: /images/Feature BG image.svg
    title: 'Excellent performance, global scale'
    text: |
      #### Excellent Lighthouse Performance, deployed on a global edge network.
    actions:
      - type: Button
        label: Why we chose Next.js
        url: /
        style: link
        elementId: hero-main-button
        showIcon: true
        iconPosition: right
        icon: arrowRight
    feature:
      type: ImageBlock
      altText: Hero section image
    styles:
      self:
        height: screen
        width: narrow
        margin: 0
        padding:
          - pb-36
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
        margin:
          - mt-12
          - mb-12
      actions:
        justifyContent: flex-start
    type: HeroCardSection
  - elementId: ''
    colors: colors-g
    backgroundWidth: full
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: Select a theme
    actions:
      - type: Button
        label: Learn how Stackbit's themes work
        url: /about
        style: link
        icon: arrowRight
        iconPosition: right
        showIcon: true
      - label: See all themes
        altText: Learn more
        url: /
        showIcon: false
        icon: arrowLeft
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-24
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
  - colors: colors-f
    backgroundWidth: inset
    elementId: ''
    images:
      - url: /images/Theme 3.png
        caption: Small buisiness
        altText: Photo of Hilary Ouse
      - url: /images/Theme 1-f28c5385.png
        altText: Photo of Isabelle Parks
        caption: App landing
      - url: /images/Theme 2-5b195e3c.png
        altText: Photo of Diamond Eagle
        caption: Startup
    spacing: 2
    columns: '3'
    imageSizePx: 1000
    showCaption: false
    enableHover: true
    styles:
      self:
        width: full
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-0
          - pb-36
        height: auto
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
    type: MediaGallerySection
  - elementId: ''
    variant: variant-b
    colors: colors-g
    backgroundWidth: full
    title: Developers build components. Marketers build content.
    actions:
      - label: Get Started
        altText: Get Started
        url: /
        showIcon: false
        icon: arrowLeft
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-16
          - pb-36
        alignItems: center
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
        margin:
          - mt-6
          - mb-32
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-12
      actions:
        justifyContent: center
        margin:
          - mt-12
          - mb-0
    type: FeaturedPostsSection
    supertitle: Driven by a powerful content model
    showDate: false
  - backgroundWidth: full
    type: TwoColumnBlurbSection
    blurbs:
      - content: |
          ### Secure, fast and scalable websites by default

          Sites built on the Jamstack have fewer moving parts to worry about.
        action:
          label: Read about the Jamstack
          altText: Read about the Jamstack
          url: /
          showIcon: true
          icon: arrowRight
          iconPosition: right
          style: link
          elementId: ''
          type: Link
      - content: >
          ### Invite collaborators and set roles


          Paid plans offer fine-grained roles and permissions and multiple
          organizations, in sync with your company structure.
        action:
          label: See documentation
          altText: See documentation
          url: /
          showIcon: true
          icon: arrowRight
          iconPosition: right
          style: link
          elementId: ''
          type: Link
      - content: |
          ### Headless CMS support

          Fast bi-directional sync with Contentful.
        action:
          label: Share your integration needs
          altText: Share your integration needs
          url: /
          showIcon: true
          icon: arrowRight
          iconPosition: right
          style: link
          elementId: ''
          type: Link
      - content: |
          ### Scale to hundreds of sites with the same codebase

          Our Enterprise plan comes with powerful multi-site management tools.
        action:
          label: View pricing
          altText: View pricing
          url: /
          showIcon: true
          icon: arrowRight
          iconPosition: right
          style: link
          elementId: ''
          type: Link
    elementId: ''
    colors: colors-e
    title: Ready for ||Serious Work
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-48
          - pb-48
          - pl-8
          - pr-8
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-neutral
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-4
      text:
        textAlign: left
        margin:
          - mt-0
          - mb-8
    supertitle: Not your mom and pops website
  - elementId: ''
    variant: variant-a
    colors: colors-g
    backgroundWidth: full
    title: Resources
    actions: []
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - px-12
        padding:
          - pt-12
          - pb-80
        alignItems: center
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-12
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-12
      actions:
        justifyContent: center
        margin:
          - mt-12
          - mb-0
    type: TwoRowFeaturedPostsSection
  - type: ContactSection
    colors: colors-c
    title: The missing bits
    text: |
      Join our newsletter to stay up-to-date with everything Stackbit
    form:
      type: FormBlock
      elementId: contact-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: true
          width: 1/2
      submitLabel: Sign Up
    styles:
      self:
        height: auto
        width: wide
        margin:
          - '-mt-48'
          - '-mb-48'
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
      text:
        textAlign: center
        fontSize: x-large
---
