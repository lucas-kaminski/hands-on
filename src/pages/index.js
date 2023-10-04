import { Box, Button, Flex } from "@chakra-ui/react"
import Landing from "../components/Landing"
import Menu from "../components/Menu"
import { useThemeContext } from "../context/theme"

export default function Home() {
  const { backgroundColor, fontColor } = useThemeContext()
  return (
    <Box bg={backgroundColor} color={fontColor} minH="100vh">
      <Menu />
      <Landing />
    </Box >
  )
}
