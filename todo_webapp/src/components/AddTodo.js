import React,{useState} from 'react'
import {nanoid} from 'nanoid'
import {Button, HStack, Input, useToast} from '@chakra-ui/react'

function AddTodo(props) {

    const toast = useToast()

    function enviarTodo(e) {
        e.preventDefault() //evita que a pagina recarrege
        console.log(content)
        if (!content) {
            toast({
                title: 'Valor em branco',
                description: 'Não inseriu nada para adicionar',
                status: 'error',
                duration: 2000,
                isClosable: 'true'
            })
            return
        }
        const todo = {
            id: nanoid(), //produz um id aleatório
            body: content,
    }

    props.addTodo(todo)
    setContent('')    
    }

    const [content, setContent] = useState('')

    return (
        <form onSubmit={enviarTodo}>
        <HStack mt='8'>
            <Input variant = 'filled' placeholder = 'Todo' value = {content} onChange={(e) => setContent(e.target.value)} />
            <Button colorScheme='pink' px='8' type='submit'>Adicionar</Button>
        </HStack>
        </form>
    )
}

export default AddTodo
