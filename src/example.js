import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { MoonIcon } from '@chakra-ui/icons'
import React from 'react'
export default function Example() {
    const { toggleColorMode } = useColorMode()
    return (
      <header>
        <Button mt='-50' mr='20' float='right' onClick={toggleColorMode}>
          <MoonIcon/> 
        </Button>
      </header>
    )
  }