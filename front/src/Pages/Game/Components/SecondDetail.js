import React, { useState } from "react";
import { Modal } from "antd";

export default function SecondDetail({ close, open, SecondDetailsData }) {
    const { id, store } = SecondDetailsData;
    const modal = {
        backgroundColor: "#212121"
    };
    return (
        <>
            <Modal
                onOk={close}
                onCancel={close}
                visible={open}
                width={1000}
                footer={null}
                bodyStyle={modal}
            ></Modal>
        </>
    );
}
