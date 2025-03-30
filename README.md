# Quick Link Preview

A React component that previews links on hover.

## Installation

You can install `quick-link-preview` via npm:

```sh
npm install quick-link-preview
```

or using yarn:

```sh
yarn add quick-link-preview
```

## Usage

Import and use `LinkPreviewer` in your React project:

```jsx
import LinkPreviewer from "quick-link-preview";

function App() {
  return (
    <div className="container">
      <LinkPreviewer url="https://en.wikipedia.org/wiki/Main_Page">
        <span className='link'>Wikipedia</span>
      </LinkPreviewer>
      
      <LinkPreviewer url="https://mayankmehta.vercel.app/">
        <span className='link'>Portfolio</span>
      </LinkPreviewer>
      
      <LinkPreviewer url="https://github.com/mayankmehta19032003/Postify">
        <span className='link'>GitHub</span>
      </LinkPreviewer>
    </div>
  );
}

export default App;
```

## Props

| Prop  | Type     | Description                     |
| ----- | -------- | ------------------------------- |
| `url` | `string` | The URL of the link to preview. |

## Contributing

Feel free to open issues or submit pull requests to improve this package.

## License

This project is licensed under the MIT License.
