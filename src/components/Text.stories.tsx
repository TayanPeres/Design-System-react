import { Text, TextProps} from './Text'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    
    args: {
        children: 'Lorem ipson',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type:'inline-radio',
                 }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj  = {}

export const Small: StoryObj  = {
    args: {
        size: 'sm',
    }
}

export const larg: StoryObj  = {
    args: {
        size: 'lg',
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args: {  
        asChild: true,
        children: (
            <p>Text with </p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    },
}