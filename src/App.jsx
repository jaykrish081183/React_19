import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User, { Profile, Setting } from './User.jsx';
import ToDo from './ToDo.jsx';
import Counter from './Counter.jsx';
import Toggle from './Toggle.jsx';
import MultipleToggle from './MultipleToggle.jsx';
import ObjectProp from './ObjectProp.jsx';
import ArrayProp from './ArrayProp.jsx';
import DefaultProps from './DefaultProps.jsx';
import Wrapper from './Wrapper.jsx';
import InputVal from './InputVal.jsx';
import Controlled from './Controlled.jsx';
import Skills from './Skills.jsx';
import RadioDropdown from './RadioDropdown.jsx';
import LoopComponent from './Loop.jsx';
import ReuseComponent from './ReuseComponent.jsx';
import ColorDropDown from './ColorDropDown.jsx';
import NestedLoop from './NestedLoop.jsx';
import UseEffectState from './UseEffectState.jsx';
import UseEffectProps from './UseEffectProps.jsx';
import InlineCSS from './InlineCSS.jsx';
import DynamicInlineCSS from './DynamicInlineCSS.jsx';
import ModuleCss from './ModuleCss.jsx';
import StyleComponent from './StyleComponent.jsx';
import Bootstrap from './Bootstrap.jsx';
import UseRefHook from './UseRefHook.jsx';
import UncontrolledComponent from './UncontrolledComponent.jsx';
import Parent from './Parent.jsx';
import UseFormStatusHook from './UseFormStatusHook.jsx';
import UseTransitionHook from './UseTransitionHook.jsx';
import DrivedState from './DrivedState.jsx';
import LiftingUpState from './LiftingUpState.jsx';
import UpdateObjectInState from './UpdateObjectInState.jsx';
import UpdateArrayInState from './UpdateArrayInState.jsx';
import UseActionStateHook from './UseActionStateHook.jsx';
import UserIDHook from './UserIDHook.jsx';
import ContextAPIData from './ContextAPIData.jsx';
import UseToggle from './UseToggle.jsx';
import UseReducerHook from './useReducerHook.jsx';
import UseAPI from './UseAPI.jsx';
import ColorMixer from './ColorMixer.jsx';
import UseOptimisticHook from './UseOptimisticHook.jsx';

const LazyLoading = lazy(() => import('./LazyLoading.jsx'));

const fetchData = () => fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json());
const userResource = fetchData();

function App() {
  const [loadUser, setLoadUser] = useState(false);
  const name = 'Jayesh Patel';
  const [count, setCount] = useState(0)
  let objUser1 = {
    name: 'Jayesh Patel',
    age: 30,
    city: 'Ahmedabad',
    country: 'India',
    hobbies: ['Reading', 'Traveling', 'Coding'],
  }
  let objUser2 = {
    name: 'Jignesh Patel',
    age: 32,
    city: 'Ahmedabad',
    country: 'India',
    hobbies: ['Reading', 'Traveling', 'Coding'],
  }
  let arrUser = [
    {
      name: 'Jayesh Patel',
      age: 30,
      city: 'Ahmedabad',
      country: 'India',
      hobbies: ['Reading', 'Traveling', 'Coding'],
    },
    {
      name: 'Jignesh Patel',
      age: 32,
      city: 'Ahmedabad',
      country: 'India',
      hobbies: ['Reading', 'Traveling', 'Coding'],
    },
    {
      name: 'Kishan Patel',
      age: 28,
      city: 'Ahmedabad',
      country: 'India',
      hobbies: ['Reading', 'Traveling', 'Coding'],
    },
  ]
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  

  return (
    <>
      <UseOptimisticHook />
      <ColorMixer />
      <h1>use API in React.js</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <UseAPI userResource={userResource} />
      </Suspense>
      <hr/><hr/>
      {
        loadUser && <Suspense fallback={<div>Loading...</div>}>
        <LazyLoading user={arrUser}  /></Suspense>
      }
      <button onClick={() => setLoadUser(true)}>Load LazyLoading</button>
      <UseReducerHook />
      <UseToggle />
      <ContextAPIData /><hr />
      <UserIDHook />
      <UseActionStateHook />
      <UpdateArrayInState />
      <UpdateObjectInState />
      <LiftingUpState />
      <DrivedState />
      <UseTransitionHook items={fruits} />
      <UseFormStatusHook />
      <Parent />
      <UncontrolledComponent />
      <UseRefHook />
      <Bootstrap />
      <StyleComponent />
      <ModuleCss />
      <DynamicInlineCSS />
      <InlineCSS />
      <UseEffectProps />
      <UseEffectState />
      <NestedLoop />
      <ColorDropDown />
      <ReuseComponent />
      <LoopComponent />
      <RadioDropdown />
      <Skills />
      <Controlled />
      <InputVal />
      <Wrapper color="orange">
        <div>
          <h1 >React Blog</h1>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
          <h1 className='heading1'>Vite + React</h1>
          <h2>Count: {count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </Wrapper>
      <DefaultProps name="jack" />
      <DefaultProps />
      <ArrayProp user={arrUser} />
      <ObjectProp user={objUser1} />
      <ObjectProp user={objUser2} />
      <MultipleToggle />
      <Toggle />
      {name}
      <User />
      <Profile />
      <Setting />
      <ToDo />
      <Counter />
    </>
  )
}

export default App