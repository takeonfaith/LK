export default function getToken() {
    return JSON.parse(localStorage.getItem('token') ?? sessionStorage.getItem('token') ?? 'null')?.token
}
