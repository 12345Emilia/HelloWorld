import React, { Component } from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
class App extends Component {
  render () {
  return (
    <div className="App">
      <Table />
      {/*<FragmentDemo />
      <LifecycleA />
      <Form />
     <h1 className='error'></h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      {/*<Stylesheet primary={false} />
      <NameList />
      <UserGreeting />
      <ParentComponent /> 
      <EventBind />
       <FunctionClick />
      <ClassClick />
      <Counter />
      <Message />
    <Greet name="Brian" heroName="Batman" >
    <p>This is children props</p></Greet>
    <Greet name="Max" heroName="Superman">
    <button>Action</button>
    </Greet>
     <Greet name="Emilia" heroName="Wonder Woman"/>
      <Welcome name="Brian" heroName="Batman" />
      <Welcome name="Max" heroName="Superman"/>
      <Welcome name="Emilia" heroName="Wonder Woman"/> 
       <Hello  />*/}
    </div>
  );
}
}

export default App;
