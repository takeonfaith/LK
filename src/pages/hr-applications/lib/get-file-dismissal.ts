import { getJwtToken } from '@entities/user/lib/jwt-token'
import axios from 'axios'

const downloadFile = async (guid: string) => {
    const button = document.getElementById('downloadButton') as HTMLButtonElement // Получаем элемент кнопки по ее ID
    if (button !== null) {
        button.disabled = true // Отключаем кнопку
        button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Загрузка...' // Добавляем иконку загрузки
    }
    const url = `https://api.mospolytech.ru/serviceforfrontpersonnelorders/Dismissal.DownloadFile?guid=${guid}`

    const headers = {
        Authorization: `Bearer ${getJwtToken()}`,
    }
    try {
        const response = await axios({
            url: url,
            method: 'GET',
            responseType: 'blob',
            headers: headers,
        })
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = downloadUrl
        link.setAttribute('download', 'order.pdf') // or any other extension
        document.body.appendChild(link)
        link.click()
    } catch (error) {
        console.error(error)
    } finally {
        button.disabled = false // Включаем кнопку
        button.innerHTML = 'Скачать файл' // Восстанавливаем текст кнопки
    }
}

export default downloadFile
