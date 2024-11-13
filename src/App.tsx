import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AppLayout } from "./components/AppLayout";
import { CalendarView } from "./pages/Calendar/CalendarView";
import { ExpensesView } from "./pages/Expenses/ExpensesView";
import { Login } from "./pages/Login/Login";
import { SettingsView } from "./pages/Settings/SettingsView";
import { PageNotFound } from "./pages/PageNotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/ProtectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate replace to="expenses" />} />
            <Route path="calendar" element={<CalendarView />} />
            <Route path="expenses" element={<ExpensesView />} />
            <Route path="settings" element={<SettingsView />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
