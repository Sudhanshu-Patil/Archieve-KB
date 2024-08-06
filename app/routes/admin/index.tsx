import { marked } from "marked";

export default function () {
  return (
    <div className="prose p-6">
      <div
        dangerouslySetInnerHTML={{
          __html: marked(`
### What is Archieve KB?

This is the Knowledge Base feature of Archieve KB.
### Features

- **WYSIWYG** editor: [Tiptap](https://tiptap.dev/) editor with AI-powered suggestions
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

`),
        }}
      />
    </div>
  );
}
