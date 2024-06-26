// import { DevtoolsProvider } from "@providers/devtools";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import React, { Suspense } from "react";

// import { authProviderClient } from "@providers/auth-provider";
// import { dataProvider } from "@providers/data-provider";
import "../styles/global.css";

export const metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <GitHubBanner />
          <RefineKbarProvider>
            {/* <DevtoolsProvider> */}
            <Refine
              routerProvider={routerProvider}
              // authProvider={authProviderClient}
              // dataProvider={dataProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "PNQGMZ-Mb3mcD-R0YYQ6",
              }}
            >
              {children}
              <RefineKbar />
            </Refine>
            {/* </DevtoolsProvider> */}
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
