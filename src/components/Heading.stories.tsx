import { Heading, HeadingProps} from './Heading'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
    
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
} as Meta<HeadingProps>

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
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {  
        asChild: true,
        children: (
            <h1>Heading</h1>
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