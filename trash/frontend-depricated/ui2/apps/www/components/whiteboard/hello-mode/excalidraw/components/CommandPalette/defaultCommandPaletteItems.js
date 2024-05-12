import { actionToggleTheme } from "../../actions";
export const toggleTheme = {
    ...actionToggleTheme,
    category: "App",
    label: "Toggle theme",
    perform: ({ actionManager }) => {
        actionManager.executeAction(actionToggleTheme, "commandPalette");
    },
};
