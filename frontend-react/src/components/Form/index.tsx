import React ,{useState, FormEvent} from "react"
import {useNavigate} from "react-router-dom"
import api from "../../services/api"
import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Select,
  Stack,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
} from "@chakra-ui/react"
import NavBar from "../NavBar"


interface DeviceForm{
  product_name:string,
  product_description:string,
  product_brand:string,
  product_image_link:string
}

export default function Form({onSubmit}:any){
    let navigate = useNavigate()
  // Set object device using interface 

  // Building variables 
  const [name,setName]=useState('')
  const [describe,setDescribe]=useState('')
  const [brand,setBrand]=useState('')
  const [image_link,setImage_link]=useState('')
  const [error,setError]=useState(false)


  async function addDevice(e:FormEvent){
    e.preventDefault()
    //setDevice({product_name:name,product_description:describe,product_brand:brand})
    const res = await api.post('/api/device',{product_name:name,
      product_description:describe,
      product_brand:brand,
      product_image_link:image_link
    })
    console.log(res.data)
    if(res.data.product_brand[0] == 'The selected product brand is invalid.' || 
    res.data.product_brand[0] == 'The product brand field is required.'
    ){
        //alert("ERRO AO CADASTRAR")
        setError(true)
    }else{
        navigate('/')
    }
  }

  return(
    <ChakraProvider theme={theme}>
     
    
     <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>

      

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Inserir novo produto
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            preencha todos os campos e vamos lá ✌️
          </Text>
          {error ? <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Ops algo deu errado</AlertTitle>
  <AlertDescription>Verifique o preenchimento dos campos e tente novamente</AlertDescription>
</Alert> : ''}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Nome do produto</FormLabel>
                  <Input type="text"
                   name="name" id="name" required
                   value={name} onChange={e=>setName(e.target.value)}
                  />
                
                </FormControl>
              </Box>

              <Box>
                <FormControl id="lastName">
                  <FormLabel>Marca</FormLabel>
              <Select placeholder='Selecione'  value={brand} onChange={e=>setBrand(e.target.value)}>
                <option value='brastemp'>Brastemp</option>
                <option value='lg'>LG</option>
                <option value='fischer'>Fischer</option>
                <option value='samsung'>Samsung</option>
                <option value='eletrolux'>Eletrolux</option>
              </Select>
                </FormControl>

                
              </Box>
            </HStack>

            <FormControl id="describe">
              <FormLabel>Descrição do produto</FormLabel>
              <Input type="text" 
              name="describe" id="describe" required
              value={describe} onChange={e=>setDescribe(e.target.value)}
              />
            </FormControl>

            <FormControl id="image_link">
              <FormLabel>Link da imagem do produto</FormLabel>
              <Input type="text" 
              name="image_link" id="image_link" required
              value={image_link} onChange={e=>setImage_link(e.target.value)}
              />
            </FormControl>

            

            <Stack spacing={10} pt={2}>
              <Button
                onClick={addDevice}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Cadastrar 
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

     
     
  </ChakraProvider>
  )
}