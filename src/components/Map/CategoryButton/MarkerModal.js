import React from 'react';
import { Popconfirm } from 'antd';

const MarkerModal = ({ visible, onConfirm, onCancel, modalInfo }) => (
    <Popconfirm
        title="위치"
        description={`${modalInfo.placeInfo}`}
        visible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
        okText="Yes"
        cancelText="No"
        footer={null}
    ></Popconfirm>
);

export default MarkerModal;
