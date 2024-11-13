import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../api/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface Props {
  email: string;
  password: string;
}
export default function useAuth() {
  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: ({ email, password }: Props) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/expenses");
      toast.success("User correctly authenticated");
    },
    onError: () => {
      toast.error("User not authenticated");
    },
  });

  return { login };
}
