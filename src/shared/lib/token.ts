export default function getToken() {
    return localStorage.getItem('token') ?? sessionStorage.getItem('token') ?? 'null'
}
