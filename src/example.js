import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { MoonIcon } from '@chakra-ui/icons'
import React from 'react'
export default function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button mt='-70' float='right' onClick={toggleColorMode}>
          <MoonIcon/> {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    )
  }