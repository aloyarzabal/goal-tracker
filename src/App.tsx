import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { AppLayout } from "./components/AppLayout";
import { CalendarView } from "./pages/Calendar/CalendarView";
import { ExpensesView } from "./pages/Expenses/ExpensesView";
import { LoginView } from "./pages/Login/LoginView";
import { SettingsView } from "./pages/Settings/SettingsView";
import { PageNotFound } from "./pages/PageNotFound";

export function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="expenses" />} />
            <Route path="calendar" element={<CalendarView />} />
            <Route path="expenses" element={<ExpensesView />} />
            <Route path="settings" element={<SettingsView />} />
          </Route>
          <Route path="login" element={<LoginView />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <AppLayout /> */}
    </>
  );
}
