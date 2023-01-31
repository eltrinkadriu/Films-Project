import { Box } from "@mui/material";
import { Theme } from "./components/layout/Theme";
import { Routes } from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex" }}>
          <Routes />
        </Box>

        <ToastContainer />
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
