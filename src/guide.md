---
#sidebar: false
#aside: false
prev: false
next: false
order: 1
---
# Documentation Guide

[[toc]]

## Overview

This documentation is powered by a tool called [VitePress](https://vitepress.dev/), which allows you to create [Markdown](https://en.wikipedia.org/wiki/Markdown) files and have them published in the form of a website with proper formatting, navigation between pages, etc.

## How to Write Markdown

First, here are some resources to get started with Markdown's syntax:

- Basic: https://www.markdownguide.org/cheat-sheet/
- Advanced: https://vitepress.dev/guide/markdown

The idea behind Markdown is to write text files that include formatting (like bold, italic, bulleted lists, tables, etc.) while having both the source text and the final document be easy to read regardless of which format you are viewing.
To create a Markdown file, open your text editor of choice, and create a file with an extension of `.md`.
Some text editors, like [VS Code](https://code.visualstudio.com/) even have the ability to preview Markdown files right within the application.
Alternatively, there are several in-browser Markdown editors available [here](https://www.google.com/search?q=markdown+editor+in+browser).
Markdown files are written in just like any other text file, and there is no "compilation" step or anything of that sort.
What you see is simply what you get.
[Here's what the source for this page looks like.](https://github.com/oaklandrobotics/docs/blob/main/src/guide.md?plain=1)

In general, Markdown uses different symbols to format texts in different ways, like so:

|                  Formatted Text                 |                     Source Text                     |
|:-----------------------------------------------:|:---------------------------------------------------:|
|                 This is _italic_                |                  `This is _italic_`                 |
|                  This is *bold*                 |                   `This is *bold*`                  |
|          This is _**bold and italic**_          |           `This is _**bold and italic**_`           |
|  This is a [link](https://oaklandrobotics.org/) |   `This is a [link](https://oaklandrobotics.org)`   |


- This is a bulleted list
- Here's another item
``` md
- This is a bulleted list
- Here's another item
```

<br>

1. This is an ordered list
2. Step 2

``` md
1. This is an ordered list
2. Step 2
```

## How to Create and Edit Pages

### File and Folder Structure

The way VitePress handles how it constructs the website is determined by what folder a file resides in.
A markdown file corresponds to a single page on the website, and a folder corresponds to a category on the website.
For example, `src/projects/igvc-2024/testing.md` would be visible at `https://docs.oaklandrobotics.org/projects/igvc-2024/testing`.
This folder structure also determines the layout of the sidebar that appears on the left when you are viewing a page.
Each folder represents a "drop-down" (a row with the collapsing arrow) in the sidebar.
In addition, each folder in the list can have its own page by creating a file called `index.md` in that folder.
Finally, for all files, it will first see if a title was specified in the file itself (usually the first `#` heading).
This title will be used on both the sidebar and in the name of the tab in your browser.

### Simple

The simplest way to create and edit pages is to do it directly through GitHub, where the source code for all the files is stored.

#### Editing a file

1. At the bottom of most of the pages on the website is a link that says "Edit this page on GitHub." Click on it. 
2. You will be brought to GitHub's in-browser text editor for that specific file. 
3. Make your changes to the file.
4. When you are done, click on "Commit changes..."
5. In the box labeled "Commit message", write a very brief message about what your changes were. 
    - This doesn't have to be too long, as it is a max. of 50 characters. Use the optional "extended description" field if you need more words.
6. Click on "Commit changes."

That's it! Your changes should be visible on the website after GitHub rebuilds the website. This process should take ~1 minute. (Be sure to refresh the page.)

#### Creating a file

1. Go to [the GitHub repository](https://github.com/oaklandrobotics/docs).
2. Click on the `src` folder, then navigate to where you would like to create your page.
3. Click "Add file," then "Create new file"
4. Enter a filename in the box labeled "Name your file..."
5. Write your content.  Make sure to include a `#` heading so the page can have a proper title.
6. When you are done, click on "Commit changes..."
7. In the box labeled "Commit message", write a very brief message about what your changes were. 
    - This doesn't have to be too long, as it is a max. of 50 characters. Use the optional "extended description" field if you need more words.
8. Click on "Commit changes."

That's it! Your changes should be visible on the website after GitHub rebuilds the website. This process should take ~1 minute. (Be sure to refresh the page.)

### Intermediate

This is convenient if you need to make multiple changes, as you don't have to commit them one at a time.
You can make all your changes and push them to the repository at once.

1. Go to [the GitHub repository](https://github.com/oaklandrobotics/docs).
2. Press the period key (`.`) on your keyboard. This will open the repository in github.dev, an in-browser IDE.
3. On the left side of the screen, use the file picker to navigate to your desired file or folder in the `src` directory. You can right-click on a folder to create new files or folders in that folder.
4. Make your changes. Click the icon that looks like two rectangles and a magnifying glass to preview a file.
5. When you are ready to push your changes, click the "Source Control" button on the far left of your screen.
6. Enter a commit message in the "Message" field.
7. Click on "Commit & Push"

That's it! Your changes should be visible on the website after GitHub rebuilds the website. This process should take ~1 minute. (Be sure to refresh the page.)

### Advanced

You probably know what you're doing. (This is also how can you preview the website locally on your own computer before pushing changes)

1. [Install Node.js](https://nodejs.org/en/download)
2. Clone the repo
3. Open a terminal in the same directory as the repo, and run this command:
    - Take a look at this guide for more info: https://vitepress.dev/guide/getting-started

```sh
npm install
```
**(Optional)** If you want to update the dependencies, (i.e. VitePress, which updates fairly often), you can run

``` sh
npm add -D vitepress vitepress-sidebar markdown-it-mathjax3
```

4. Start up the dev server with this command.

``` sh
npm run docs:dev
```

5. You should see a message similar to this. Enter the URL it gives you in your browser to see the preview of the webpage.

``` sh
  vitepress v1.0.1

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

6. Make your changes and push 'em.

That's it! Your changes should be visible on the website after GitHub rebuilds the website. This process should take ~1 minute. (Be sure to refresh the page.)

## Other Misc. Things

### Changing Settings

You can change the settings and behaviors of the website by editing [`.vitepress/config.mts`](https://github.com/oaklandrobotics/docs/blob/main/.vitepress/config.mts).
This includes things like the navbar at the top, the sidebar, and the theme of the website, among other things.
This requires very light knowledge of how TypeScript and Vue.js work.
Take a look at these guides for more info:

- https://vitepress.dev/reference/site-config
- https://vitepress.dev/reference/default-theme-config
- https://vitepress.dev/guide/frontmatter
- https://vitepress-sidebar.jooy2.com/api

### GitHub Pages

The website itself is hosted on GitHub Pages.
In order for this to work properly VitePress needs to generate the actual `.html` pages that are hosted by GitHub Pages.
This is made possible by a GitHub Action workflow that builds the webpage and deploys it with GitHub Pages.
The workflow can be found at [`.github/workflows/deploy.yml`](https://github.com/oaklandrobotics/docs/blob/main/.github/workflows/deploy.yml).
It will run every time the repo is pushed to on the `main` branch.
If it seems like the website is not updating, make sure there is a green ":white_check_mark:" icon next to the most recent commit.
If there is an ":x:," it means the build failed for some reason.
Check the logs to troubleshoot the issue.

More info: https://vitepress.dev/guide/deploy#github-pages