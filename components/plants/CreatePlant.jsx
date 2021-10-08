import React, { useState } from "react";
import { useFormik } from "formik";
import { Flex, Heading } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { api_server } from "../../service/api";

const CreatePlant = () => {
  const [collection, setCollection] = useState("Pessoal");
  const formik = useFormik({
    initialValues: {
      name: "",
      collection: collection,
      description: "",
      purchase_price: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      console.log({ ...values, collection });
      api_server.post("/plants", { ...values, collection }).then((res) => {
        console.log(res);
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex direction="column" pt="5" pl="5">
        <Heading>Cadastrar sua plantinha:</Heading>
        <label htmlFor="name">Nome da planta</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="description">Descrição</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <label htmlFor="purchase_price">Preço de compra</label>
        <input
          id="purchase_price"
          name="purchase_price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.purchase_price}
        />

        <label htmlFor="purchase_price">Coleção:</label>
        <Select
          onChange={(e) => {
            console.log(e.target.value);
            setCollection(e.target.value);
          }}
        >
          <option value="Pessoal">Pessoal</option>
          <option value="Loja">Loja</option>
        </Select>

        <button type="submit">Cadastrar!</button>
      </Flex>
    </form>
  );
};
export default CreatePlant;
