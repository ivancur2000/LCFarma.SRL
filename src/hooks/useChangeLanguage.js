import {useState} from "react"

export const useChangeLanguage = () => {
  const [changeLanguage, setChangeLanguage] = useState(false);
  
  const handleOnChange = (e)=>{
    setChangeLanguage(e.target.checked);
  }

  return{
    changeLanguage,
    handleOnChange
  }
}
