import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "@/skinsense/layouts/app-layout";
import Landing from "@/skinsense/pages/landing";
import Goals from "@/skinsense/pages/goals";
import Scan from "@/skinsense/pages/scan";
import Analysis from "@/skinsense/pages/analysis";
import Results from "@/skinsense/pages/results";

export default function SkinSensePrototype() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Landing />
            </AppLayout>
          }
        />

        <Route
          path="/goals"
          element={
            <AppLayout>
              <Goals />
            </AppLayout>
          }
        />

        <Route
          path="/scan"
          element={
            <AppLayout>
              <Scan />
            </AppLayout>
          }
        />

        <Route
          path="/analysis"
          element={
            <AppLayout>
              <Analysis />
            </AppLayout>
          }
        />

        <Route
          path="/results"
          element={
            <AppLayout>
              <Results />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  );
}
