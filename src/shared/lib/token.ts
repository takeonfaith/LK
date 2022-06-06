export default function Token() {
    return JSON.parse(localStorage.getItem('token') ?? sessionStorage.getItem('token') ?? 'null')?.token
}
