import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes=cva('border h-12 rounded-full px-6 font-meduim',{
    variants:{
        variant:{
            primary:'bg-lime-200 text-neutral-950 border-lime-200',
            secondary:'border-white text-white bg-transparent',
        },
        size: {
            sm: "h-10",
        },
    },

});

export default function Button(
    props: {variant: "primary" | "secondary",size?: "sm";} & ButtonHTMLAttributes<HTMLButtonElement>){
    const { variant , className, size,...OtherProps }=props;
    return <button 
    className={classes({
        variant, 
        size,
        className,
    })}
    {...OtherProps}
    />
}