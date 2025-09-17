// src/router/Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import Layout from "@/components/layout/layout";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              fontSize: "18px",
              color: "#666",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map(({ path, element: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
