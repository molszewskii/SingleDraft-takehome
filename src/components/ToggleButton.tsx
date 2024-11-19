import React from "react";

type ToggleButtonProps={
    onToggle: () => void;
    isActive: boolean;
    children: React.ReactNode;
};
