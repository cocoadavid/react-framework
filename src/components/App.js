import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./errorPages/PageNotFound";
import { env } from "../properties";
import NavigationBar from "./common/NavigationBar";
import LanguageProvider from "../context/LanguageContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import "moment/locale/hu";
import routes from "../routes";
moment.locale("hu");

const theme = createMuiTheme(env.theme);
function App() {
  return (
    <LanguageProvider>
      <MuiPickersUtilsProvider
        utils={MomentUtils}
        locale="hu"
        libInstance={moment}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavigationBar
            variant="vertical"
            content={
              <Switch>
                {routes.map((r, idx) => (
                  <Route
                    exact={r.exact}
                    path={r.path}
                    component={r.component}
                    key={`${r.path}_${idx}`}
                  />
                ))}
                <Route component={PageNotFound} />
              </Switch>
            }
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </LanguageProvider>
  );
}

export default App;
