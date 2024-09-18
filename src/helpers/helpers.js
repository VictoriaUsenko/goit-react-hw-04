export function transformData(data) {
  const result = data.map((photo) => {
    return {
      id: photo.id,
      alt: photo["alt_description"],
      description: photo.description,
      likes: photo.likes,
      thumbImg: photo.urls.small,
      fullImg: photo.urls.regular,
      author: photo.user.name,
      created_at: photo.created_at,
    };
  });

  return result;
}
