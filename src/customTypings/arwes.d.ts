declare module 'arwes' {

    import * as React from 'react'

    type DefaultTheme = object | null

    type WithThemeFactory<Theme> = <
        InnerProps extends { theme: NonNullable<Theme> },
        InnerComponent extends React.ComponentType<InnerProps>,
        OuterProps extends InnerProps & { theme?: NonNullable<Theme> }
        >(
        comp: InnerComponent

    ) => React.ComponentType<OuterProps>

    interface ThemeProviderProps<Theme> {
        theme: NonNullable<Theme> | ((outerTheme: Theme) => NonNullable<Theme>)
        children: React.ReactNode

    }

    type ThemeProviderFactory<Theme> = React.ComponentType<ThemeProviderProps<Theme>>

    type UseThemeFactory<Theme> = <CustomTheme = Theme>() => CustomTheme

    interface Theming<Theme> {
        context: React.Context<Theme>
        withTheme: WithThemeFactory<Theme>
        ThemeProvider: ThemeProviderFactory<Theme>
        useTheme: UseThemeFactory<Theme>

    }

    declare function createTheming<Theme>(context: React.Context<Theme>): Theming<Theme>

    declare const withTheme: WithThemeFactory<DefaultTheme>
    declare const ThemeProvider: ThemeProviderFactory<DefaultTheme>
    declare const ThemeContext: React.Context<DefaultTheme>
    declare const useTheme: UseThemeFactory<DefaultTheme>
    declare function createTheme<Theme>(): Theming<Theme>



    export class Puffs extends React.Component<
        {
            theme?: any;
            classes?: any;
            animate?: boolean;
            puffInterval?: number;
            quantity?: number;
            children?: any;
            className?: any;
            style?: any?;
        },
        any
        > { }



    export class Arwes extends React.Component<
        {

        },
        any
        > { }


    export {
        ThemeContext,
        createTheming,
        withTheme,
        useTheme,
        ThemeProvider,
        ThemeProviderProps,
        Theming,
        createTheme
    }
}
