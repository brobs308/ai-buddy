import { useFormik } from "formik";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Skeleton,
  Link,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getLinks } from "../apis/saver";
import { useAuthContext } from "../Providers/AuthProvier";

export default function MediumSaver() {
  const { userId } = useAuthContext();

  const { data, isFetching } = useQuery({
    queryKey: ["getLinks", userId],
    queryFn: getLinks,
  });
  const formik = useFormik({
    initialValues: {
      link: "",
      description: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxW="80%" bg="gray.100">
      <VStack spacing={10} width="100%">
        <Flex align="flex-start" justify="center">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="link">Link</FormLabel>
                <Input
                  id="link"
                  name="link"
                  type="link"
                  // variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.link}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input
                  id="description"
                  name="description"
                  type="description"
                  // variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </FormControl>
              <Button type="submit" colorScheme="purple">
                Save
              </Button>
            </VStack>
          </form>
        </Flex>
        <TableContainer w="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isFetching
                ? Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <Tr key={i}>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                        <Td>
                          <Skeleton height="20px" />
                        </Td>
                      </Tr>
                    ))
                : data?.data?.arr?.map(
                    (item: { link: string; description: string }) => (
                      <Tr key={item.link}>
                        <Td>{item.description}</Td>
                        <Td>
                          <Link href={item.link} isExternal>
                            {item.link}
                          </Link>
                        </Td>
                      </Tr>
                    )
                  )}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Container>
  );
}
