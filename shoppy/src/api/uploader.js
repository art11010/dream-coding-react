export async function uploadImage(file) {
  // 제품 사진 Cloudinary에 업로드 후 url 획득
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
