import React from "react"
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import '../css/homework.css'
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:3000/upload/word',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} 文件上传成功.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 文件上传失败.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export default function HomeWorkUpload() {
    return (
        <div id='area'>
           
            <Dragger {...props}  >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖拽作业到这个区域上传</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
        </div>
    )

}