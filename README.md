# Remix Knowledge Base

This is the Knowledge Base by Archieve KB.


### Getting Started

1. Install dependencies:

```
npm install
```

2. Initialize the database _(the `schema.prisma` db provider must match the `DATABASE_URL` provider)_:

```
npx prisma migrate dev --name init
```

or

```
npx prisma db push
```

3. Start the development server:

```
npm run dev
```

### Features

- **WYSIWYG** editor: [Tiptap](https://tiptap.dev/) editor with AI-powered suggestions
- **Markdown** editor: [Monaco](https://github.com/suren-atoyan/monaco-react) editor with markdown support.
- **Multi-knowlege-base** support: Create multiple knowledge bases for different purposes.
- **Multi-language** support: Add categories and articles in multiple languages.
- **Simple Analytics**: Views, Upvotes, and Downvotes tracking.
- **Image storage** with Supabase: Upload article images to [Supabase](https://supabase.io) Storage.
- **SEO**: Add SEO title, description, and image to your articles.
- **Article Duplication**: Duplicate articles so you don't start from scratch.
- **Article Drafts**: Save your articles as drafts and publish them when you're ready.
- **Import and Export**: Don't lose your data, import and export your knowledge bases.

### License

Licensed under the MIT License.
