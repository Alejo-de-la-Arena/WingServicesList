# Wing Services List

WordPress plugin for the NorthWing Digital challenge. It adds a Gutenberg block called **Wing Services List** that lets you build a list of services (image, title, short description) right from the block editor, and renders it on the front end as a card grid.

## How it's built

I used a parent/child block setup with `InnerBlocks`:

- **Wing Services List** – the container. Has an optional heading and a "columns" setting.
- **Wing Service Item** – one card (image + title + description).

I went this route instead of a single block with a repeater because it means adding, deleting, and reordering items all come for free from WordPress core — no custom UI needed for that part, and it behaves like any other native block.

I chose Gutenberg over Elementor since it doesn't depend on a page builder and it's the more modern, React-based standard.

## How to use it

1. Copy the `wing-services-list` folder into `wp-content/plugins/` and activate it.
2. Add the **Wing Services List** block to any post or page. It starts with 3 empty items.
3. For each item, click **Select image** and fill in the title and description.
4. Reorder, add, or remove items like you would with any block.
5. In the block settings sidebar you can set the number of columns (1–4). It's responsive and drops to 1 column on mobile.

No build step needed — the `build/` folder is already compiled and committed. If you want to edit the source, run `npm install` then `npm run build` (or `npm start` for watch mode).

## What's not done

Kept this within the ~2 hour suggestion, so a few things I'd add with more time:

- Dynamic rendering (`render.php`) instead of static saved markup — would give proper responsive images (`srcset`) for free.
- An optional link per service ("Read more").
- Some visual variants (card style vs. plain list).

Everything else works as described. Let me know if anything looks off.
