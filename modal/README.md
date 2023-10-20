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
