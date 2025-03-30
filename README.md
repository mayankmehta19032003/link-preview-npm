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
        <span>Wikipedia</span>
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
