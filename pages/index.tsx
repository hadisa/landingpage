import HomeSite from "@/SiteComponents/Home/HomeSite";
import { AppProvider } from "@appProvider/AppProvider";
import { AppStateProvider } from "@appProvider/AppStateProvider";
import { ModalsAppProvider } from "@appProvider/ModalsAppProvider";
import UndoableProvider from "@appProvider/UndoableProvider";
import { UpdateSettingsProvider } from "@appProvider/UpdateSettingsProvider";
import { CssBaseline } from "@mui/material";
import React from "react";

export default function Home() {
  const [isLoad, setIsLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <UndoableProvider>
        <AppProvider>
          <UpdateSettingsProvider>
            <AppStateProvider>
              <ModalsAppProvider>
                <HomeSite />;
              </ModalsAppProvider>
            </AppStateProvider>
          </UpdateSettingsProvider>
        </AppProvider>
      </UndoableProvider>
    </React.Fragment>
  );
}
