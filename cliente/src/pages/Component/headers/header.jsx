import React from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderBar = ({ colorBgContainer, collapsed, setCollapsed, isMobile, entidad }) => {
  return (
    <Header
      style={{
        margin: '1rem',
        padding: '1px 1px 1px 16px',
        background: colorBgContainer,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '15px',
        overflow:'hidden',
        fontSize: '3rem'
      }}
    >
      <h3>{entidad}</h3>
      

      {/* Botón de menú solo visible en pantallas pequeñas */}
      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined />}
          style={{
            fontSize: '1.5rem',
            padding: '1rem 1rem 1rem 1rem '
          }}
          onClick={() => setCollapsed(!collapsed)} // Cambia el estado de colapso
        />
      )}
    </Header>
  );
};

export default HeaderBar;
