import { Box, ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../context';
import { theme } from '../styles';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <Box id="outer-box" maxW="full" minH="100vh">
              <Component {...pageProps} />
            </Box>
          </AuthProvider>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
