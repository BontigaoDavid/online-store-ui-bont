import { ChakraProvider, Flex, Box, Text, Button, Input, InputLeftAddon, InputRightAddon, InputGroup, Image, List, ListItem } from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import './App.css';

function App() {
  return (
    <div className="App">
      <Box bg='gray.200' width='100%'>
       <Box color="white" bg="blue.900" boxShadow="md">
        <Flex py={4} align="center">
          <Text fontSize="lg" fontWeight="bold" minW='125px' ml={4}>
            Online Store
          </Text>
          <InputGroup >
            <InputLeftAddon color="black">
            All<ChevronDownIcon />
            </InputLeftAddon>
            <Input variant="filled" placeholder='Search Store' w='80%' bg="white" color="black" _focus={{borderColor: 'orange', bg: "white"}}/>
            <InputRightAddon bg='orange.300' borderColor='orange.300' color="black">
              <SearchIcon />
            </InputRightAddon>
          </InputGroup>
          <Button variant='outline' borderColor="transparent" mr={1} bg='transparent' _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Login</Button>
          <Button variant='outline' borderColor="transparent" mr={1} bg='transparent' _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Orders</Button>
          <Button variant='outline' borderColor="transparent" mr={1} bg='transparent' _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Cart</Button>
        </Flex>
        <Flex bg="blue.700" align="center" minW={1500}>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>All</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Customer Service</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Best Sellers</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Amazon Basics</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Prime</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>New Releases</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Today's Deals</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Music</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Books</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Registry</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Fashon</Button>
          <Button variant='outline' bg='transparent' borderColor="transparent" borderRadius={0} _hover={{ borderColor: 'white'}} _focus={{bg: 'transparent'}}>Home</Button>
        </Flex>
      </Box>
      <Box color="white" bg="blue.900" w={1500} m='auto' backgroundImage='https://via.placeholder.com/150' transition='ease-in'>
        <Flex align="center" h={240}>
          <ChevronLeftIcon boxSize={50}/>
          <ChevronRightIcon boxSize={58} ml='auto'/>
        </Flex>
        <Flex color="black" align="center" justifyContent='space-evenly' backgroundImage='linear-gradient(180deg, transparent, #E2E8F0)'>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Top Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Save Now
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            New Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold' >
            Everyday Low Prices
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
        </Flex>
      </Box>
      <Box w={1500} m='auto'>
        <Flex color="black" align="center" h={400} justifyContent='space-evenly' mt={4}>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Top Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Save Now
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            New Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold' >
            Everyday Low Prices
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
        </Flex>
        <Box p={4} pb={6} w={1460} maxW='100%' m='auto' mt={4} bg='white' fontSize={20} fontWeight='bold'>
          Best Sellers in Books
          <Flex>


          </Flex>
          <Flex color="black" align="center" justifyContent='space-evenly' mt={2}>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
          </Flex>
        </Box>
        <Box p={4} pb={6} w={1460} maxW='100%' m='auto' mt={4} bg='white' fontSize={20} fontWeight='bold'>
          Best Sellers in Books
          <Flex>

            
          </Flex>
          <Flex color="black" align="center" justifyContent='space-evenly' mt={2}>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
          </Flex>
        </Box>
        <Flex color="black" align="center" h={400} justifyContent='space-evenly' mt={4}>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Top Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Save Now
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            New Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold' >
            Everyday Low Prices
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
        </Flex>
        <Box p={4} pb={6} w={1460} maxW='100%' m='auto' mt={4} bg='white' fontSize={20} fontWeight='bold'>
          Best Sellers in Books
          <Flex>

            
          </Flex>
          <Flex color="black" align="center" justifyContent='space-evenly' mt={2}>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
          </Flex>
        </Box>
        <Box p={4} pb={6} w={1460} maxW='100%' m='auto' mt={4} bg='white' fontSize={20} fontWeight='bold'>
          Best Sellers in Books
          <Flex>

            
          </Flex>
          <Flex color="black" align="center" justifyContent='space-evenly' mt={2}>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
          </Flex>
        </Box>
        <Box color='gray.500' w={800} m='auto' textAlign='right' mb={4} fontSize={14}>
        <Image src='https://via.placeholder.com/150' mt={4} w={800} h={250}/>
        Sponsored
        </Box>
        <Flex color="black" align="center" h={400} justifyContent='space-evenly' mt={4}>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Top Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            Save Now
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold'>
            New Deals
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
          <Box bg='white' w={350} h='100%' p={4} fontSize={20} fontWeight='bold' >
            Everyday Low Prices
            <Image src='https://via.placeholder.com/150' w={150} h={200} mt={4} mb={4} w='100%' h={300}/>
            <Box color='blue.400' fontSize={15} fontWeight='normal' _hover={{color: 'orange'}}>Learn More</Box>
          </Box>
        </Flex>
        <Box p={4} pb={6} w={1460} maxW='100%' m='auto' mt={4} bg='white' fontSize={20} fontWeight='bold'>
          Best Sellers in Books
          <Flex>

            
          </Flex>
          <Flex color="black" align="center" justifyContent='space-evenly' mt={2}>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
            <Image src='https://via.placeholder.com/150' w={200} h={200}/>
          </Flex>
        </Box>
        <Box p={4} pb={6} w={1460} maxW='100%' m='auto' mt={4} bg='white' fontSize={20} fontWeight='bold'>
          Best Sellers in Books
          <Flex>


          </Flex>
          <Flex color="black" align="center" justifyContent='space-evenly' mt={2}>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
            <Image src='https://via.placeholder.com/150' w={150} h={200}/>
          </Flex>
        </Box>
      </Box>
      <Box mt={4} py={6} bg='white' w='100%'>
        <Box border='1px solid #E2E8F0' borderColor='gray.300' justifyContent='center' textAlign='center' py={8} fontSize={14}>
          <Box>See Personalized Reccomendations</Box>
          <Button bg='orange.300' w={220} h={8} fontSize={13}>Sign In</Button>
          <Box fontSize={12}>New Customer? Start Here</Box>
        </Box>
      </Box>
      <Box textAlign='center' py={2} color='white' bg='gray.600' fontSize={13}>
        Back to top
      </Box>
      <Box bg='blue.900'>
        <Flex color='white' w='65%' m='auto' py={8} justifyContent='space-between'>
          <Box fontWeight='bold'>
            Get to Know Us
            <List fontWeight='normal' mt={3} spacing={2} fontSize={14}>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
            </List>
          </Box>
          <Box fontWeight='bold'>
            Payment Products
            <List fontWeight='normal' mt={3} spacing={2} fontSize={14}>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
            </List>
          </Box>
          <Box fontWeight='bold'>
            Get to Know Us
            <List fontWeight='normal' mt={3} spacing={2} fontSize={14}>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
            </List>
          </Box>
          <Box fontWeight='bold'>
            Customer Help
            <List fontWeight='normal' mt={3} spacing={2} fontSize={14}>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
              <ListItem>FooterLink</ListItem>
            </List>
          </Box>
        </Flex>
        <Flex borderTop='solid 1px white' borderColor='gray.400' justifyContent='center' color='white' fontWeight='bold' align='center' py={5} fontSize={17}>
          Online Store
          <Button variant='outline' ml={16} fontSize={14} fontWeight='normal'>Language</Button>
          <Button variant='outline' ml={2} fontSize={14} fontWeight='normal'>Location</Button>
        </Flex>
        <Box bg='gray.800' py={8}>
          <Flex color='white' w={1000} justifyContent='space-between' fontSize={12} m='auto'>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
          <List spacing={8}>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
            <ListItem>
              <ListItem>Navigation Link</ListItem>
              <ListItem color='gray.400'>Link Description</ListItem>
            </ListItem>
          </List>
        </Flex>
        </Box>
        <Box bg='gray.800' py={8} textAlign='center' color='white' fontSize={12}>
          <Flex justifyContent='center'>
            <Box>Conditions of Use</Box>
            <Box ml={4}>Privacy Notice</Box>
            <Box ml={4}>Your Privacy Settings</Box>
          </Flex>
          <Box>2023 Online Store Project</Box>
        </Box>
      </Box>
    </Box>
    </div>
  );
}

export default App;

