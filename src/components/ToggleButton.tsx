import React, { FC } from "react";

type ToggleButtonProps={
    onToggle: () => void;
    isActive: boolean;
    children: React.ReactNode;
};

export const ToggleButton: FC<ToggleButtonProps> = ({onToggle, isActive, children}) =>{
    return(
        <button
            onClick={onToggle}
            className={`transition-colors ${
                isActive ? "bg-gray-800" : "bg-black/75"
              } text-white text-sm rounded px-3 py-1`}   
        >
            {children}
        </button>
    )
}