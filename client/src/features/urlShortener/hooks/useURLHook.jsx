import { useState } from 'react'
import axiosInstance from '../api/urls'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

 const useURLHook = () => {
    const [url, setUrl] = useState('')
    const [shortenedUrls, setShortenedUrls] = useState([])
    const [copiedId, setCopiedId] = useState(null)
    const [loading,setLoading] = useState(true)
  const handleSubmit =async (e) => {
    e.preventDefault()
   
    try{
       await axiosInstance.post('/api/url/create',{url:url})
      toast.success('URL Created Successfully')
     
      
    }
    catch (error) {
      console.error('Error shortening URL:', error)
      toast.error("Server Error")
    }
    setUrl('') 
  }

  const getAllUrls = async () => {
    try{
      const res = await axiosInstance.get('/api/url/all')
      setShortenedUrls(res.data.urls)
      setLoading(false)
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
    handleDelete,
    loading,
  }
}

export default useURLHook