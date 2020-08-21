export const requestData = async <T extends object[]>(url: string): Promise<T> => {
  const request = await fetch(url);
  const response = await request.json();

  return response;
}
