import React from "react";
import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider, useDispatch } from "react-redux";
// import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./Routes/path";
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { config } from "./components/config";
import { WagmiProvider } from 'wagmi'

const App = () => {
  const queryClient = new QueryClient()
  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = '36b684bec5d35b67f9905cb4e440458a'
  // 2. Create wagmiConfig
  // 3. Create modal
  createWeb3Modal({
      wagmiConfig: config,
      projectId,
      enableAnalytics: true // Optional - defaults to your Cloud configuration
  })
  return (
    <div>
         <WagmiProvider config={config}>
         <QueryClientProvider client={queryClient}>
     <Provider store={store}>
        {/* <ToastContainer /> */}
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
       </Provider>
       </QueryClientProvider>
       </WagmiProvider>
      </div>
  );
};

export default App;


