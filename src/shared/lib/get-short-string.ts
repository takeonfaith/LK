export default function getShortStirng(str: string, length: number) {
  return str.length > length ? `${str.substr(0, length)}...` : str;
}
