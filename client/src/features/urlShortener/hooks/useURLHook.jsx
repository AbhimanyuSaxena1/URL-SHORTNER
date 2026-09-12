import { useState } from 'react'
import axiosInstance from '../api/urls'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

 const useURLHook = () => {
    const [url, setUrl] = useState('')
    const [shortenedUrls, setShortenedUrls] = useState([])
      const [copiedId, setCopiedId] = useState(null)
    
  const handleSubmit =async (e) => {
    e.preventDefault()
    console.log('URL to shorten:', url) 
    try{
      const res = await axiosInstance.post('/api/url/create',{url})
      
    }
    catch (error) {
      console.error('Error shortening URL:', error)
    }
    toast.success('URL Created Successfully')
    setUrl('') 
  }

  const getAllUrls = async () => {
    try{
      const res = await axiosInstance.get('/api/url/all')
      setShortenedUrls(res.data.urls)
    }
    catch (error) {
      console.error('Error fetching URLs:', error)
    }

  }
   const handleCopy = async (url, id) => {
    await navigator.clipboard.writeText(url)
    setCopiedId(id)

    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }
  const handleDelete = async (id) => {
    try{
      await axiosInstance.delete(`/api/url/delete/${id}`)
      toast.success("URL Deleted Successfully")
      getAllUrls()
    }
    catch (error) {
      toast.error('Error deleting URL:', error)
    }
  }


  return {
    url,
    setUrl,
    handleSubmit,
    getAllUrls,
    shortenedUrls,
    handleCopy,
    copiedId,
    setCopiedId,
    handleDelete
  }
}

export default useURLHook