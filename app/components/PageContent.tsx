"use client";

interface PageContent {
    children: React.ReactNode;
}

const PageContent: React.FC<PageContent> = ({ 
    children
}) => {

    return (
        <div
            className="
            "
        >
            {children}
        </div>
    );
}
 
export default PageContent;