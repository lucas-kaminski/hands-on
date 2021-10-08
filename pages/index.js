import CreatePlant from '../components/plants/CreatePlant.jsx'
import { Flex } from '@chakra-ui/react'
import PlantsTable from '../components/plants/PlantsTable.jsx'

export default function Home() {
  return (
    <div className="container">
      <Flex minH='100vh' justify='center' align='center' bg='red.100' >
        <Flex bg='green.100' w='50%' h='90vh' direction='column'>
          <CreatePlant />
          <br />
          <br />
          <br />
          <br />
          <br />
          <PlantsTable />
        </Flex>
      </Flex>
    </div>
  )
}
