import { Box, ChakraProvider } from '@chakra-ui/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { AuthProvider } from '../context';
import { theme } from '../styles';
import store from '../store';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <AuthProvider>
              <Box id="outer-box" maxW="full" minH="100vh">
                <Component {...pageProps} />
              </Box>
            </AuthProvider>
          </Provider>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
