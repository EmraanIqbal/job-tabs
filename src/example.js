import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import React from 'react'
export default function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button  onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    )
  }