export function GetRandomUserId() {
  const getUser = () => Math.floor(Math.random() * 10) + 1;
  return getUser();
}
