import { Fragment } from 'react';

const FragmentExample = () => {
    return (
    <Fragment>
      <h1>Welcome, Megh!</h1>
      <p>This is an example using &lt;Fragment&gt; in React.</p>
      <ul>
        <li>No extra divs</li>
        <li>Clean DOM</li>
        <li>Multiple sibling elements allowed</li>
      </ul>
    </Fragment>
    // <>
    //     <h1>Hello</h1>
    //     <p>This is a fragment example</p>
    // </>
    );
};
export default FragmentExample;