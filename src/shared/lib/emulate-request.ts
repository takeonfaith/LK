const emulateRequest = <T>(response: T, delay = 1000) =>
    new Promise<T>((resolve) => {
        setTimeout(() => resolve(response), delay)
    })

export default emulateRequest
