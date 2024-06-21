import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const handleChangeUrl = (url) => {
    navigate(url);
  };

  return {
    handleChangeUrl,
  };
};
