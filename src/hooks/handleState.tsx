"use client"
import { createContext, useState, ReactNode } from "react";

// Define the type for the context value
type HandleContextType = {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    nextSlide: (slideLength: number) => void;
    prevSlide: (slideLength: number) => void;
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
    pageJump: (page: number) => void;
};

// Create the context with proper type
export const HandleContext = createContext<HandleContextType>({
    currentIndex: 0,
    setCurrentIndex: () => { },
    nextSlide: () => { },
    prevSlide: () => { },
    pageJump: () => { }
});

export const HandleState = ({ children }: { children: ReactNode }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false);

    const playSound = () => {
        const audio = new Audio("/Sound/click.mp3");
        audio.play();
    };

    const pageJump = (page: number) => {
        setCurrentIndex(page);
    };

    const nextSlide = (slideLength: number): void => {
        playSound();
        setCurrentIndex(currentIndex === slideLength - 1 ? currentIndex : currentIndex + 1);
    };

    const prevSlide = (): void => {
        playSound();
        setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex - 1);
    };

    return (
        <HandleContext.Provider value={{
            currentIndex,
            setCurrentIndex,
            nextSlide,
            prevSlide,
            isOpen,
            setIsOpen,
            pageJump
        }}>
            {children}
        </HandleContext.Provider>
    );
};
