import React, { useEffect, useState } from 'react';
import { Upload, message,Card } from 'antd';
import ImgCrop from 'antd-img-crop';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
// 接收一个userId属性来表示当前用户的ID。{ userId }
const AvatarUploader = () => {
  const userId = localStorage.getItem('_id');
  // 使用useState来保存头像图片的URL和上传状态。
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [data, setData] = useState(null)
  // 当用户选择一个文件时，它将被保存在file对象中，然后使用axios库将其发送到服务器。
  // 上传成功后，服务器将返回一个包含头像图片URL的响应，并将其保存在组件的状态中
  const handleUpload = async (file) => {
    try {
      setLoading(true);
     
        axios.get('http://localhost:3000/teacher/user/'+ userId).then(res => {
            // console.log(res.data);
            setData(res.data)})
     
      // console.log( data);
      const profession = data.profession
      const username = data.username
      // console.log('查找头像信息：'+value);
      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('userId', userId);
      formData.append('profession' ,profession)
      formData.append('username',username)
      const res = await axios.patch('http://localhost:3000/avatar/'+ userId, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setImageUrl(res.data.imageUrl);
      setLoading(false);
      message.success('头像上传成功!');
    } catch (error) {
      console.error(error);
      setLoading(false);
      message.error('头像上传失败!');
    }
  };
  // 上传格式限制
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('你只能上传 JPG/PNG 文件!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片必须小于 2MB!');
      return false;
    }
    return true;
  };
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
      message.success('头像上传成功!');
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传头像</div>
    </div>
  );
  // console.log(imageUrl);   
  // http://localhost:3000/public/avatar/图片名
  return (
    <Card
      title="用户头像上传"
      bordered={false}
      style={{
        width: 150,
      }}
    > 
    <ImgCrop width={50} height={50} rotationSlider>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={({ file }) => handleUpload(file)}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%'
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      </ImgCrop>
    </Card>
  );
};
export default AvatarUploader;
