import React from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'
function Header() {
    const {isOpen,onOpen,onClose}=useDisclosure();
  return (
    <>
    <Button 
    pos={'fixed'}
    top={4}
    left={4}
    colorScheme="purple"
    padding={0}
    width={10}
    height={10}
    borderRadius={50}
    zIndex={'overlay'}
    onClick={onOpen}
    >
        <BiMenuAltLeft /></Button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent >
                <DrawerCloseButton/>
                <DrawerHeader>Video Hub</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/'}>Home</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/Videos'}>Videos</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                            <Link to={'/upload'}>Upload videos</Link>
                        </Button>
                    </VStack>
                    <HStack  width={'full'} justifyContent={'space-evenly'} position={'absolute'} left={0} bottom={10}>
                        <Button onClick={onClose} colorScheme={'purple'} variant={'solid'}><Link to={'/login'}>Log in</Link></Button>
                        <Button onClick={onClose} colorScheme='purple' variant={'outline'}><Link to={'/signup'}>Sign Up</Link></Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header