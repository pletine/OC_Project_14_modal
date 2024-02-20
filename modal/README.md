# Modal project

## Description

This is a school project in the OpenClassroom Front-End Developer course. The goal is to create a modal component with React.
This component is not maintained and is not intended to be used in production.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and you can found all the scripts available in create-react-app documentation.
Node version used: 20.8.0

## Installation

`npm install pierreletine-modal`

### Dependencies

This project use [React](https://reactjs.org/) and [React-DOM](https://reactjs.org/docs/react-dom.html) as peer dependencies.

## Configuration

Need to use a Local State
`const [modal, setModal] = useState(false);`

Need a button to open the modal
`<button onClick={() => setModal(true)}>Open Modal</button>`

And declare the modal
`<Modal onClose={() => setModal(false)} show={modal}> <h2>Modal</h2> <p>Modal Content</p> </Modal>`

The h2 and p are children you can change with your own content.
The rest of the component is not customizable.

## Style

The modal structure is one div for the global modal and one div for the content.
The default className of the modal is `modal` and the default className of the content is `modal-content`.

To change the default style of the modal, you can override the CSS variables in your own CSS file.

You can change the className of the modal with the props `classModalName` and `classModalContent` to add your own style.

You can also add style variables with props `styleModal` and `styleModalContent`.
