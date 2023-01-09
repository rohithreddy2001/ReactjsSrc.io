// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Welcome from './components/Welcome';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css';
// import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';

import { Component } from 'react';
import ParentComp from './components/ParentComp';

class App  extends Component {
  render() {
    return (
      <div className="App">

        <ParentComp />

        {/* <Table /> */}

        {/* <FragmentDemo /> */}

        {/* <LifeCycleA /> */}

        {/* <Form /> */}

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Inline /> */}
        {/* <StyleSheet primary={true}/> */}

        {/* <NameList /> */}

        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
      {/* <EventBind /> */}

        {/* <FunctionClick />
        <ClassClick /> */}

        {/* <Greet name="Rohith" id='1'>
          <p>This is children class</p>
        </Greet>
        <Greet name="Bablu" id='2'>
          <button>button</button>
        </Greet>
        <Greet name="RRR" id='3'>
          <form>
            Name : <input placeholder='Enter Your Name'></input><br></br>
            <button name='submit'>Submit</button>
          </form>
        </Greet> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        
        {/* <Welcome name="Rohith" id='1'></Welcome>
        <Welcome name="Bablu" id='2'></Welcome> */}
        
        {/* <Hello /> */}
        
      </div>
    );
  }
  }
  

export default App;
