"use client";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ 
    children
}) => {

    return (
        <div className="z-40">
            {children}
        </div>
    );
}
 
export default Container;