import { DefaultTheme } from 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme {}
}

export const lightTheme: DefaultTheme = {}

export const darkTheme: DefaultTheme = {};

export const theme: DefaultTheme = {};