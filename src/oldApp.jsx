import Hello from './hello';
import Contact from './Contact';
import Counter from './Counter';

function App() {
  const hellodata = [
    {name: 'Anirach',message:'Hi there'},
    {name:'tom',message:'Hello..'}
  ];
  return(
    <div className='App'>
      <Counter/>
      {hellodata.map((data,index)=>(
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      <Contact email="Ainrach@gmail.com" phone="0819485696"/>
    </div>
  )
}

export default App
