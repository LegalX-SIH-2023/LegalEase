export default async (url, method, data, isMultipart) => {
  try {
    let reqOptions = { method };

    if (isMultipart) {
      reqOptions.body = data;
    } else {
      reqOptions.headers = { "Content-Type": "application/json" };
      reqOptions.body = JSON.stringify(data);
    }
    const result = await fetch(url, reqOptions);
    const response = await result.json();
    return response;
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
};
