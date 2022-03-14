export default function Token() {
    return JSON.parse(localStorage.getItem('token') ?? 'null')?.token
}
