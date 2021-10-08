import React, { useEffect, useState } from "react";
import { api_server } from "../../service/api";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";

function PlantsTable() {
  const [plants, setPlants] = useState([]);
  const request = async () => {
    const response = await api_server.get("/plants");
    setPlants(response.data);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <Button variantColor="green" onClick={request}>
        {" "}
        Refresh{" "}
      </Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th isNumeric>Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {plants.map((plant) => (
            <Tr key={plant.id}>
              <Td>{plant.name}</Td>
              <Td>{plant.description}</Td>
              <Td isNumeric>{plant.purchase_price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default PlantsTable;
