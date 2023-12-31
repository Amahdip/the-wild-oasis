import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate('/dashboard', { replace: true });
      queryClient.setQueryData(['user'], user.user);
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error('Provided email or password incorrect');
    },
  });

  return { isLoading, login };
};
