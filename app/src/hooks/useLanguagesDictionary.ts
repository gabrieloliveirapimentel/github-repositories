import { useTheme } from "styled-components"

export const useLanguagesDictionary = () => {
    const theme = useTheme();

    const languagesDictionary: { [key: string]: string } = {
        'TypeScript':   theme.blue,
        'JavaScript':   theme.yellow,
        'Shell':        theme.green,
        'Jinja':        theme.red,
        'Python':       theme['dark-blue'],
        'MATLAB':       theme['dark-red'],
        'Java':         theme['dark-yellow'],
        'Jupyter Notebook': theme['orange-500'],
    };

    return Object.keys(languagesDictionary).map(language => ({
        name: language,
        color: languagesDictionary[language],
    }));
};
