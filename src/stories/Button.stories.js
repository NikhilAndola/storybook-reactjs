import Button from '../components/Button';

export default { 
    title: "Components/Button",
    component: Button,
    argTypes: {handleClick: {action: "handleClick"}}
}

// export const Red = () => <Button label="Red" backgroundColor="red" />;

const Template = (args) => <Button {...args}/>

export const Red = Template.bind({})
Red.args = {
    backgroundColor: "red",
    label: "Click me",
    size: "md",
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: "green",
    label: "Click me",
    size: "lg",
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: "pink",
    label: "Click me",
    size: "sm",
}