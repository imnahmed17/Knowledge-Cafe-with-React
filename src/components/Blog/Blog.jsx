import React from 'react';
import './Blog.css';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Props vs state</Accordion.Header>
                    <Accordion.Body>
                        Props and state are both used for storing data in React components, but they serve different purposes.
                        <br /> <br />
                        <p className='justify'>
                            <b>Props</b> are used to pass data down from parent components to child components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. They are read-only components. Props are immutable so we cannot modify the props from inside the component.
                        </p>
                        <p className='justify'>
                            <b>State</b>, on the other hand, is an updatable structure containing information or data about a dynamic component, where the information can change over time. Anytime the data inside these components are changed, State will re-render to reflect these changes such as user input or the result of an API call. It is used to manage data within a component. It cannot be accessed and modified outside the component. 
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does useState work?</Accordion.Header>
                    <Accordion.Body>
                        <p className='justify'>
                            In React, <span className='bg-light px-2 rounded'>useState</span> is a hook that allows functional components to have state. It is a function that returns an array with two elements: the current state value and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. It can be used like this: 
                            <br />
                            <code>const [state, setState] = useState(initialValue);</code>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Purpose of useEffect other than fetching data.</Accordion.Header>
                    <Accordion.Body>
                        <p className='justify'>
                        The <span className='bg-light px-2 rounded'>useEffect</span> hook is a versatile tool that allows you to perform a variety of tasks beyond just fetching data. It is often used for side-effects such as setting up subscriptions, manually changing the DOM, or interacting with external APIs. This is useful for tasks that need to be done on every render, such as fetching data from an API or setting up event listeners. While fetching data from an API is one common use case for <span className='bg-light px-2 rounded'>useEffect,</span> it can also be used for other purposes such as:
                        </p>
                        <ol>
                            <li>Updating the document title</li>
                            <li>Updating local storage</li>
                            <li>Timers and intervals</li>
                            <li>Animations</li>
                            <li>Event listeners</li>
                        </ol>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How Does React work?</Accordion.Header>
                    <Accordion.Body>
                        <p className='justify'>
                            <b>React</b> is a declarative, component-based JavaScript library for building user interfaces. It works by allowing developers to break down the UI into individual components and manage their state separately. Each component is a self-contained module of code that renders some type of user interface element. When a user interacts with a React application, React updates the view by creating a virtual representation of the UI called the Virtual DOM. This allows React to efficiently update only the parts of the UI that have changed instead of updating the entire page. React uses a unidirectional data flow, meaning that data flows from parent components to child components through props. When a component's state or props change, React re-renders the component and its children.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;