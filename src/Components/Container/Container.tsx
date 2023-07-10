import React from 'react';

interface containerStyles {
  maxWidth: string
  margin: string
}

const containerStyles:containerStyles = {
  maxWidth: '1170px',
  margin: '0 auto'
}

interface ContainerProps {
  children: React.ReactNode;
}

const Container:React.FC <ContainerProps> = ({children}) => {
  return (
    <div style={containerStyles}>
      {children}
    </div>
  );
};

export default Container