import React from 'react';
import { Input, Flex, QRCode, Space } from 'antd';
const value = 'https://ant.design';

// const QRCodeElement = () => (
//     <Flex gap="middle" wrap>
//         <QRCode value={value} status="loading" />
//         <QRCode value={value} status="expired" onRefresh={() => console.log('refresh')} />
//         <QRCode value={value} status="scanned" />
//     </Flex>
// );
// export default QRCodeElement;

const QRCodeElement = () => {
    const [text, setText] = React.useState('https://naver.com/');
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vh' }}>
            <Space direction="vertical" align="center">
                <QRCode value={text || '-'} size={250} />
            </Space>
        </div>
    );
};
export default QRCodeElement;
