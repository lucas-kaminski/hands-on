import {Heading} from '@chakra-ui/react'; //import das tags utilizadas

import {VStack} from '@chakra-ui/react' //template padrão que centraliza
import {IconButton} from '@chakra-ui/react' //gera botões padrões, estilizado com botão do react
import {useColorMode} from '@chakra-ui/react'

import TodoList from './components/TodoList' //
import AddTodo from './components/AddTodo' //importa os componentes utilizados no site

import {FaSun, FaMoon} from 'react-icons/fa'

import {useState, useEffect} from 'react'

function App() {
  var initialTodos = [
    {
        id: 1,
        body: 'COMPRAR ARROZ'
    },
    {
        id: 2,
        body: 'FAZER FEIJÃO'
    }
  ]

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []) //busca o local storage, se n tiver nada, passa um array vazio, está em função para carregar somente a primeira vez o local storage

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  })
  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id //if true, keep, if false, delete
    })
    setTodos(newTodos)
  }
  
  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  const {colorMode, toggleColorMode} = useColorMode()


  console.log('APP',todos)
  console.log(colorMode,typeof(colorMode), toggleColorMode) //Envia o object em um array com a função e o props
  return (
    <VStack p={4}>
    <IconButton icon={colorMode === 'dark' ? <FaSun /> : <FaMoon /> } isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode}></IconButton>
    <Heading mb='8' fontWeight='extrabold' bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text'>Todo Aplication</Heading>
    <TodoList listaToDo={todos} deleteTodo={deleteTodo}/>
    <AddTodo addTodo={addTodo}/>
    </VStack>
  );
}

export default App;
